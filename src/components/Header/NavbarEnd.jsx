import { NavLink } from "react-router-dom";
function NavbarEnd() {
  return (
    <nav>
      <NavLink to={"/"}>Accueil</NavLink>
      <NavLink to={"/characters"}>Personnages</NavLink>
    </nav>
  );
}

export default NavbarEnd;
