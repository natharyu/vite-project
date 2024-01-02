const register = (req, res) => {
  try {
    res.json({ message: "Enregistrement reussie" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'enregistrement" });
  }
};

const login = (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
      return res.json({ message: "Connexion reussie" });
    }
    res.status(400).json({ error: "Erreur lors de la connexion" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
};

const logout = (req, res) => {
  try {
    res.json({ message: "Deconnexion reussie" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la deconnexion" });
  }
};

export default { login, register, logout };
