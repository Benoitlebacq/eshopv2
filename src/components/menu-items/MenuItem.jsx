import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem-style.scss";

const MenuItem = ({ title, image, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
