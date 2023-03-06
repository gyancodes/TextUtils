import React from "react";

const Nav = () => {
  return (
    <div className="topnav">
      <div className="leftmenu">
        <li>
          <a href="/" className="logo">Navbar</a>
        </li>
      </div>
      <div className="rightmenu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/" className="loginbtn">Login</a>
        </li>
      </div>
    </div>
  );
};

export default Nav;
