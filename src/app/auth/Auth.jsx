import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setUserData } from "../redux/actions/UserActions";
import { autoLogin, logout } from "../redux/actions/LoginActions";
import jwtAuthService from "../services/jwtAuthService";
import localStorageService from "../services/localStorageService";

class Auth extends Component {
  state = {};

  constructor(props) {
    super(props);
    //auto login if jwt exist, user exist and do not exceed expire time
    this.checkJwtAuth();
  }

  checkJwtAuth = () => {
    if (
      localStorageService.getItem("auth_user") &&
      window.localStorage.getItem("jwt_token") &&
      localStorageService.getItem("expire_date")
    ) {
      if (new Date(localStorageService.getItem("expire_date")) > new Date()) {
        this.props.setUserData(localStorageService.getItem("auth_user"));
        this.props.autoLogin();
        jwtAuthService.autoLogin(
          localStorageService.getItem("auth_user"),
          window.localStorage.getItem("jwt_token")
        );
      } else {
        this.props.setUserData({});
        this.props.logout();
        jwtAuthService.logout();
      }
    }
  };

  render() {
    const { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  setUserData: PropTypes.func.isRequired,
  login: state.login,
});

export default connect(mapStateToProps, { setUserData, autoLogin, logout })(
  Auth
);
