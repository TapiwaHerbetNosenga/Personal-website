import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="inset-y-0 flex flex-col justify-center" id="pageNav">
      <ul className="list-none flex  justify-around" id="navList"> 
        <Link to="/"> 
          <li>About Me</li>
        </Link>
        <Link to="My-CV">
          <li>My CV</li>
        </Link>
        <Link to="My-Links">
          <li>My Links</li>
        </Link>
        <Link to="My-Projects">
          <li>My Projects</li>
        </Link>
        <Link to="My-Experience">
          <li>My Work Experience</li>
        </Link>
        <Link to="Portfolio">
          <li>Portfolio</li>
        </Link>
      </ul>
    </div>
  );
}
