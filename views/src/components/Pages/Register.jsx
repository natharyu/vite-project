import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login&register.scss";

function Register() {
  const [error, setError] = useState(null);
  useSelector((state) => state.auth.isLogged);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { lastname, firstname, email, password, address, birthday } = event.target;

    await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastname: lastname.value,
        firstname: firstname.value,
        email: email.value,
        password: password.value,
        address: address.value,
        birthday: birthday.value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
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
      <label htmlFor="lastname">Nom</label>
      <input type="text" id="lastname" placeholder="Nom" />
      <label htmlFor="firstname">Prénom</label>
      <input type="text" id="firstname" placeholder="Prénom" />
      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" placeholder="E-mail" />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" id="password" placeholder="Mot de passe" />
      <label htmlFor="address">Adresse</label>
      <input type="text" id="address" placeholder="Adresse" />
      <label htmlFor="birthday">Date de naissance</label>
      <input type="date" id="birthday" value={new Date().toISOString().slice(0, 10)} />
      <button type="submit">S'enregistrer</button>
    </form>
  );
}

export default Register;
