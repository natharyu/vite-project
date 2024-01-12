import mysql from "mysql2/promise";

const database = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vite_project",
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});

try {
  await database.getConnection().then((connection) => {
    console.log("Connexion to database success mysql");
    connection.release();
  });
} catch (error) {
  console.error("Connexion to database failed:", error);
}

export default database;
