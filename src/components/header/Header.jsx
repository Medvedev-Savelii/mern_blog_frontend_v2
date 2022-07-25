import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://proprikol.ru/wp-content/uploads/2020/11/kartinki-pshenichnoe-pole-21.jpg"
        alt=""
      />
    </div>
  );
}
