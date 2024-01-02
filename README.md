# Steps for initiate a Vite project with a Node.js Express server

## 1- Initiate Vite project

initiate your vite project by typing this command in your terminal :

```bash
npm create vite@latest
```

Then you just need to follow the prompt.

## 2- create server environment with express

Create a new folder in root folder and a server.js file in this server folder by typing :

```bash
mkdir server
```

```bash
cd server
```

```bash
touch server.js
```

## 3- modify package.json for server

open your package.json file and add the server commmand in script section

```json
"scripts": {
    "dev": "vite",
    "server": "nodemon ./server/server.js",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

Then add 2 new lines in dependencies section (cors and express)

```json
"dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-router-dom": "^6.21.0"
  },
```

## 4- install all dependencies

make sur you are in the root folder of your project

```bash
cd ..
```

and type:

```bash
npm install
```

## 5- edit server.js

just add the server code in the server.js file like this

```js
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
```

## 6- run server in the terminal

```bash
npm run server
```

## 7- test your server

open your browser and go to [localhost:3000](http://localhost:3000)
If you can see "Hello World!", your server is correctly running.

## 8- run your frontend

in other terminal, type

```bash
npm run dev
```

Then open your browser and go to [localhost:5173](http://localhost:5173)

## 9- your server and frontend are running

Congratulations! Your server and frontend are running.
