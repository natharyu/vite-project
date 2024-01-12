import bcrypt from "bcrypt";
import Query from "../model/Query.js";

const register = async (req, res) => {
  try {
    const { lastname, firstname, email, password, address, birthday } = req.body;
    const [existingUser] = await Query.getOneByField("users", "email", email);
    if (existingUser) {
      return res.status(400).json({ error: "E-mail déjà inscrit" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await Query.create("users", {
      lastname,
      firstname,
      email,
      password: hashedPassword,
      address,
      birthday,
    });
    return res.status(200).json({ message: "Enregistrement reussie" });
  } catch (error) {
    return res.status(500).json({ error: "Erreur lors de l'enregistrement" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await Query.getOneByField("users", "email", email);
    if (!user) {
      return res.status(401).json({ error: "Erreur lors de la connexion." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Erreur lors de la connexion." });
    }
    req.session.isLogged = true;
    req.session.username = user.email;
    req.session.role = user.role;
    return res.status(200).json({ message: "Connexion reussie" });
  } catch (error) {
    return res.status(500).json({ error: "Erreur lors de la connexion" });
  }
};

const logout = (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("Session");
    res.status(200).json({ message: "Deconnexion reussie" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la deconnexion" });
  }
};

const checkAuth = (req, res) => {
  try {
    if (req.session.isLogged) {
      return res.status(200).json({ message: "Authentification reussie" });
    } else {
      return res.status(204).json({ error: "Authentification impossible" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Erreur lors de la connexion" });
  }
};

export default { login, register, logout, checkAuth };
