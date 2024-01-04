import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login&register.scss";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/authSlice";

function Register() {
  const [error, setError] = useState(null);
  useSelector((state) => state.auth.isLogged);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message) {
          navigate("/login");
        } else {
          setError(response.error);
        }
      });
  };
  return (
    <form id="register" onSubmit={handleSubmit}>
      <h2>S'enregistrer</h2>
      {error && <span>{error}</span>}
      <label htmlFor="username">Nom d'utilisateur</label>
      <input type="text" id="username" placeholder="admin" />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" id="password" placeholder="password" />
      <button type="submit">S'enregistrer</button>
    </form>
  );
}

export default Register;
