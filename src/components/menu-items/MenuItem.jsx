import React from "react";
import "./menuItem-style.scss";

const MenuItem = ({ title, image, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">Shop now </span>
      </div>
    </div>
  );
};

export default MenuItem;
