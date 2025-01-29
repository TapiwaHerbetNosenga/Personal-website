import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {

  const [selectedTab, selectTab ] = useState(null);

  const handleClick = (tab)=>{
selectTab(tab);
  }

  return (
    <div className="inset-y-0 flex flex-col justify-center" id="pageNav">
      <ul className="list-none flex  justify-around" id="navList"> 
        {/* <Link to="/"> 
          <li onClick={()=>handleClick(0)}  className={selectedTab === 0 ? "selected" : ""} >About Me</li>
        </Link> */}
        <Link to="My-CV">
          <li  onClick={()=>handleClick(1)}  className={selectedTab === 1 ? "selected" : ""}>My CV</li>
        </Link>
        <Link to="My-Links">
          <li  onClick={()=>handleClick(2)}  className={selectedTab === 2 ? "selected" : ""}>My Links</li>
        </Link>
        <Link to="My-Projects">
          <li  onClick={()=>handleClick(3)}  className={selectedTab === 3 ? "selected" : ""}>My Projects</li>
        </Link>
        {/* <Link to="My-Experience">
          <li  onClick={()=>handleClick(4)}  className={selectedTab === 4 ? "selected" : ""}>My Work Experience</li>
        </Link> */}
        <Link to="/">
          <li  onClick={()=>handleClick(5)}  className={selectedTab === 5 ? "selected" : ""}>Portfolio</li>
        </Link>
      </ul>
    </div>
  );
}
