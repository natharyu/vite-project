import database from "../config/database.js";

class Query {
  async getAll(table) {
    const query = `SELECT * FROM ${table}`;
    const [results] = await database.execute(query);
    return results;
  }

  async getOneByField(table, field, value) {
    const query = `SELECT * FROM ${table} WHERE ${field} = ?`;
    const [results] = await database.execute(query, [value]);
    return results;
  }

  async create(table, data) {
    const query = `INSERT INTO ${table} (${Object.keys(data).join(", ")}) VALUES (${Object.keys(data)
      .map(() => "?")
      .join(", ")} )`;
    const [result] = await database.execute(query, Object.values(data));
    return result;
  }
}

export default new Query();
