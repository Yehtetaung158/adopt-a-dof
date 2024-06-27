import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className=" flex justify-between bg-opacity-25 py-3 items-center px-2 select-none font-roboto ">
        <a href="">YHA</a>
        <ul className=" flex gap-4 ">
            <li className=""><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"pep"}>Pep</NavLink></li>
            <li><NavLink to={"blog"}>Blog</NavLink></li>
            <li><NavLink to={"contact"}>Contact Us</NavLink></li>
        </ul>
    </nav>
  );
};

export default Nav;
