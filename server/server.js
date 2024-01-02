import express from "express";
import cors from "cors";
import router from "./routes/router.js";

const server = express();
const port = 3000;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);

server.get("/", (req, res) => {
  res.json("Hello World!");
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
