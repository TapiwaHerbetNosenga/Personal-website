import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
}
