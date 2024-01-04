import bcrypt from "bcrypt";

const users = [
  { username: "admin", password: "$2b$10$50OzEI4KeUrUOnhVSfyK/ebOlDX7YfcVYAb3tH7xMaHRtpPDxc1R2" },
  { username: "user", password: "$2b$10$50OzEI4KeUrUOnhVSfyK/ebOlDX7YfcVYAb3tH7xMaHRtpPDxc1R2" },
  { username: "guest", password: "$2b$10$50OzEI4KeUrUOnhVSfyK/ebOlDX7YfcVYAb3tH7xMaHRtpPDxc1R2" },
  { username: "guest2", password: "$2b$10$50OzEI4KeUrUOnhVSfyK/ebOlDX7YfcVYAb3tH7xMaHRtpPDxc1R2" },
];

const register = (req, res) => {
  try {
    const { username, password } = req.body;
    users.map((user) => {
      if (user.username === username) {
        return res.status(400).json({ error: "Utilisateur existant" });
      }
    });
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, hashedPassword });
    return res.status(200).json({ message: "Enregistrement reussie" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'enregistrement" });
  }
};

const login = (req, res) => {
  try {
    const { username, password } = req.body;
    users.map((user) => {
      if (user.username === username && bcrypt.compareSync(password, user.password)) {
        req.session.isLogged = true;
        req.session.username = username;
        return res.status(200).json({ message: "Connexion reussie" });
      }
    });
    return res.status(400).json({ error: "Mauvais identifiants" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la connexion" });
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
