import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./components/Pages/Character";
import Characters from "./components/Pages/Characters";
import Home from "./components/Pages/Home";
import App from "./App";
import Login from "./components/Pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="character/:id" element={<Character />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
