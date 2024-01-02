import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/authSlice";
function NavbarEnd() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <NavLink to={"/"}>Accueil</NavLink>
      <NavLink to={"/characters"}>Personnages</NavLink>
      {isLogged ? <button onClick={handleLogout}>Deconnexion</button> : <NavLink to={"/login"}>Connexion</NavLink>}
    </nav>
  );
}

export default NavbarEnd;
