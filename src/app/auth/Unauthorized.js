import React, { Component } from "react";
import { Link } from "react-router-dom";

class Unauthorized extends Component {
  state = {};
  render() {
    return (
      <div className="not-found-wrap text-center">
        <h1 className="text-60">401</h1>
        <p className="text-36 subheading mb-3">Unauthorized!</p>
        <p className="mb-5  text-muted text-18">
          Sorry! The page you were looking for cannot be accessed by this
          account.
        </p>
        <Link to="/" className="btn btn-lg btn-primary btn-rounded">
          Go back to home
        </Link>
      </div>
    );
  }
}

export default Unauthorized;
