import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <Link className="Nav-nav" to="/dogs">
        Home
      </Link>
      <Link className="Nav-nav" to="/dogs/Whiskey">
        Whiskey
      </Link>
      <Link className="Nav-nav" to="/dogs/Duke">
        Duke
      </Link>
      <Link className="Nav-nav" to="/dogs/Perry">
        Perry
      </Link>
      <Link className="Nav-nav" to="/dogs/Tubby">
        Tubby
      </Link>
    </div>
  );
};

export default Nav;
