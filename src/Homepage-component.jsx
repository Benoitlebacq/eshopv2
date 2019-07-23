import React from "react";
import "./homepage-component.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h2 className="title">Hats</h2>
            <span className="subtitile">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">Jackets</h2>
            <span className="subtitile">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">sneakers</h2>
            <span className="subtitile">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">Womens</h2>
            <span className="subtitile">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">Mens</h2>
            <span className="subtitile">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
