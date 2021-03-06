import React from "react";
import {Link} from "react-router";

//no need to import render since will not be directly rendered.
export const Header = (props) => {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className=".navbar-header">
            <ul className="nav navbar-nav">
              <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
              <li><Link to={"/user"} activeClassName={"active"}>User</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
};
