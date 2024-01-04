import bcrypt from "bcrypt";
import fs from "fs";

const userList = JSON.parse(fs.readFileSync("./controllers/users.json", "utf-8"));

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = userList.find((user) => user.username === username);
    if (userExist) {
      return res.status(400).json({ error: "Utilisateur existant" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    userList.push({ username, password: hashedPassword, role: "user" });
    fs.writeFileSync("./controllers/users.json", JSON.stringify(userList));
    return res.status(200).json({ message: "Enregistrement reussie" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'enregistrement" });
  }
};

const login = (req, res) => {
  try {
    const { username, password } = req.body;
    const userFind = userList.find((user) => user.username === username && bcrypt.compare(password, user.password));
    if (!userFind) {
      return res.status(400).json({ error: "Mauvais identifiants" });
    }
    req.session.isLogged = true;
    req.session.username = userFind.username;
    req.session.role = userFind.role;
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

const getUsers = (req, res) => {
  try {
    return res.status(200).json({ users: userList });
  } catch (error) {
    return res.status(500).json({ error: "Erreur lors de la connexion" });
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

export default { login, register, logout, getUsers, checkAuth };
