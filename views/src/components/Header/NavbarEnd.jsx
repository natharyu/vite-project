import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/authSlice";
function NavbarEnd() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch("http://localhost:3000/auth/logout", { method: "GET" }).then((response) => {
      if (response.ok) {
        dispatch(logout());
        navigate("/");
      } else {
        setError("Erreur lors de la déconnexion !");
      }
    });
  };

  return (
    <nav>
      <NavLink to={"/"}>Accueil</NavLink>
      <NavLink to={"/characters"}>Personnages</NavLink>
      {isLogged ? (
        <button onClick={handleLogout}>Deconnexion</button>
      ) : (
        <>
          <NavLink to={"/login"}>Connexion</NavLink>
          <NavLink to={"/register"}>S'enregistrer</NavLink>
        </>
      )}
      <NavLink to={"/users"}>Utilisateurs</NavLink>
    </nav>
  );
}

export default NavbarEnd;
