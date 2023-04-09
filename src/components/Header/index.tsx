import React from "react";
import { Scroll, Timer } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/img/Logo.svg";

// import { Container } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between">
      <img src={Logo} alt="Logo marca" />
      <nav className="flex gap-[0.5rem]">
        <NavLink
          to="/"
          title="Timer"
          className={`flex  w-12 items-center justify-center border-x-0 border-transparent hover:border-b-[3px] hover:border-green-500  h-12${
            location.pathname === "/" ? "text-green-500" : "text-gray-100"
          }`}
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="history"
          title="Histórico"
          className={`flex h-12 w-12 items-center justify-center border-x-0 border-transparent hover:border-b-[3px] hover:border-green-500  flex${
            location.pathname === "/history"
              ? "text-green-500"
              : "text-gray-100"
          }`}
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
