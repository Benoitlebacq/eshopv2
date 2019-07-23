import React from "react";
import { Route } from "react-router-dom";
import "./homepage-component.scss";
import Directory from "../components/directory/Directory-component";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
