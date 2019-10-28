import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Header nav-wrapper bg-aqua">
      <div className="container">
        <div className="brand-logo">
          <a href="/">
            <img
              src="https://news.ycombinator.com/y18.gif"
              width="18"
              height="18"
              alt=""
            />
            <b>Hacker News</b>
          </a>
        </div>

        <ul className="container">
          <li>
            <NavLink to="/new">new</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/past">past</NavLink>
          </li>
          <li>|</li>

          <li>
            <NavLink to="/ask">ask</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/show">show</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/jobs">jobs</NavLink>
          </li>
        </ul>
      </div>

      <a id="login" href="/">
        login
      </a>
    </div>
  );
};
export default Navbar;
