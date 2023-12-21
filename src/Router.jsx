import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Home from "./pages/Home";
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
