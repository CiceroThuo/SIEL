import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import logo from "../../assets/Streetleague.jpg"
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} />
      </div>
         
         
      <Link to="/">Home</Link>

      <Link to="/news">News</Link>

      <Link to="/standings">Standings</Link>

      <Link to="/fixtures">Fixtures</Link>

    </nav>
  );
};

export default Navbar;

