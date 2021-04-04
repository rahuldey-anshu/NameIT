import React from "react";
import headerImg from "../../images/undraw_feeling_proud_qne1.png";

import "./Header.css";
const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        className={`headerImg ${
          headerExpanded ? "headerImg-expanded" : "headerImg-contracted"
        } headerImg-expanded`}
        alt="headerImage"
        src={headerImg}
      />
      <h1 className={`headerText ${
          headerExpanded ? "headerText-expanded" : "headerText-contracted"
        } headerText-expanded`}>{headTitle}</h1>
    </div>
  );
};

export default Header;
