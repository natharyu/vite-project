import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import session from "express-session";
import path from "path";

const server = express();
const port = 3000;
server.use(express.static("views/dist"));
server.use(cors({ credentials: true }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(
  session({
    name: "Session",
    secret:
      "c56723fd55c56541332e3b798c62d1052c8abb6f3cae4d4655fda547bcc368ca41a87a3f91aea0c8b94e057578809a4dc7543932ea6070d869c94f462704d3db", // clé de chiffrement du cookie de session, https://www.random.org/strings/
    resave: false, // true pour sauvegarder la session à chaque requête même si elle n'a pas changé / false pour sauvegarder uniquement si elle a changé (performances), true est déprécié
    saveUninitialized: false, // true pour sauvegarder une session vide dans le store, false pour ne pas la sauvegarder (performances), true est déprécié
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 semaine
      secure: false, // true pour https(en production), false pour http
      httpOnly: true, // true pour empêcher l'accès au cookie depuis le javascript du client (document.cookie), aide contre les attaques XSS
      sameSite: "lax", // 'lax' pour permettre certaines requêtes (les GET) cross-site tout en offrant une protection contre les attaques CSRF
    },
    rolling: false, // reset maxAge à chaque requête
  })
);
server.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});
server.use(router);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/dist", "index.html"));
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
