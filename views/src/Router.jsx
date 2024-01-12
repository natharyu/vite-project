import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./components/Pages/Character";
import Characters from "./components/Pages/Characters";
import Home from "./components/Pages/Home";
import App from "./App";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Users from "./components/Pages/Users";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/slices/authSlice.js";
import { useEffect } from "react";
import Error404 from "./components/Pages/Error404";

function Router() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="character/:id" element={<Character />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
