import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/pages/Characters";
import Character from "./components/pages/Character";
import Home from "./components/pages/Home";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="character/:id" element={<Character />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
