import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login&register.scss";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice.js";

function Login() {
  const [error, setError] = useState(null);
  useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message) {
          navigate("/");
        } else {
          setError(response.error);
        }
      });
  };
  return (
    <form id="login" onSubmit={handleSubmit}>
      <h2>Se conecter</h2>
      {error && <span>{error}</span>}
      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" placeholder="Email" />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" id="password" placeholder="Mot de passe" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
