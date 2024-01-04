import bcrypt from "bcrypt";
import fs from "fs";

const userList = JSON.parse(fs.readFileSync("./controllers/users.json", "utf-8"));

const register = (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = userList.find((user) => user.username === username);
    if (userExist) {
      return res.status(400).json({ error: "Utilisateur existant" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    userList.push({ username, hashedPassword });
    fs.writeFileSync("./controllers/users.json", JSON.stringify(userList));
    return res.status(200).json({ message: "Enregistrement reussie" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'enregistrement" });
  }
};

const login = (req, res) => {
  try {
    const { username, password } = req.body;
    const userFind = userList.find((user) => user.username === username && bcrypt.compareSync(password, user.password));
    if (!userFind) {
      return res.status(400).json({ error: "Mauvais identifiants" });
    }
    req.session.isLogged = true;
    req.session.username = username;
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

export default { login, register, logout };
