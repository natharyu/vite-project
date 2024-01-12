import Query from "../model/Query.js";
const getUsers = async (req, res) => {
  try {
    const users = await Query.getAll("users");
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: "Erreur lors de la connexion" });
  }
};

export default { getUsers };
