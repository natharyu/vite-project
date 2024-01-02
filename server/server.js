import express from "express";
import cors from "cors";

const server = express();
const port = 3000;

server.use(cors());

server.get("/", (req, res) => {
  res.json("Hello World!");
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
