import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/authSlice";

function Login() {
  const [error, setError] = useState(null);
  useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        dispatch(login());
        navigate("/");
      } else {
        setError("Erreur lors de la connexion !");
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <span>{error}</span>}
      <label htmlFor="username">Nom d'utilisateur</label>
      <input type="text" id="username" />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
