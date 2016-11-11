import React from "react";


//no need to import render since will not be directly rendered.
export const Header = (props) => {
    return(
      <nav className="navbar navbar-default">
        <div className=".navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="#">{props.homeLink}</a></li>
          </ul>
        </div>
      </nav>
    );
};
