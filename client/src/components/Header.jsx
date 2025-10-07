import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
