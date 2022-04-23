import React, { Component } from "react";
import { Link } from "react-router-dom";

class Unauthenticated extends Component {
  state = {};
  render() {
    return (
      <div className="not-found-wrap text-center">
        <h1 className="text-60">Please Sign In</h1>
        <p className="text-36 subheading mb-3">
          Session Expired / Unauthenticated!
        </p>
        <p className="mb-5  text-muted text-18">
          Sorry! Your session has expired, please sign in again. The page you
          were looking for must be accessed with a signed in account.
        </p>
        <Link
          to="/session/signin"
          className="btn btn-lg btn-primary btn-rounded"
        >
          Go to Sign In
        </Link>
      </div>
    );
  }
}

export default Unauthenticated;
