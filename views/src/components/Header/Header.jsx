import React from "react";
import NavbarStart from "./NavbarStart";
import NavbarEnd from "./NavbarEnd";
import "./header.scss";

function Header() {
  return (
    <header>
      <div>
        <NavbarStart />
        <NavbarEnd />
      </div>
    </header>
  );
}

export default Header;
