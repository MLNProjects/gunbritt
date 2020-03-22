import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container" data-testid="landing-container">
      <div className="top-circle" />
      <h1 className="logo-title">Quarantine helper</h1>
      <p className="text-information">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id elit rhoncus, tincidunt nisi quis, vestibulum
        diam. Donec eu lacinia risus, quis hendrerit dui. Fusce posuere sodales justo, sed semper lacus malesuada id.
      </p>
      <div className="btn-group">
        <Link to="/loggain">
          <button className="signin" data-testid="landing-btn-signin">
            Logga in
          </button>
        </Link>
        <Link to="/registrera">
          <button className="signup" data-testid="landing-btn-signup">
            Registrera
          </button>
        </Link>
      </div>
      <div className="bottom-circle" />
    </div>
  );
};

export default Landing;
