import React, { Component, Fragment } from "react";
import { withRouter, matchPath } from "react-router-dom";
import { connect } from "react-redux";
import AppContext from "app/appContext";
import GullLayout from "app/GullLayout/GullLayout";
import { flatMap, isEmpty } from "lodash";
import { setUserData } from "../redux/actions/UserActions";
import { logout } from "../redux/actions/LoginActions";
import jwtAuthService from "../services/jwtAuthService";
import localStorageService from "../services/localStorageService";

class AuthGuard extends Component {
  constructor(props, context) {
    super(props);
    let { routes } = context;

    this.state = {
      authorized: true,
      routes,
    };
  }

  componentDidMount() {
    this.setState({
      routes: flatMap(this.state.routes, (item) => {
        if (item.routes) {
          return [...item.routes];
        }
        return [item];
      }),
    });

    if (!this.state.authorized) {
      this.redirectRoute(this.props);
    }
  }

  componentDidUpdate() {
    if (!this.state.authorized) {
      this.redirectRoute(this.props);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.authorized !== this.state.authorized;
  }

  static getDerivedStateFromProps(props, state) {
    if (localStorageService.getItem("expire_date")) {
      if (new Date(localStorageService.getItem("expire_date")) < new Date()) {
        props.setUserData({});
        props.logout();
        jwtAuthService.logout();
      }
    }
    const { location, user } = props;
    const { pathname } = location;

    const matched = state.routes.find((r) => {
      //matchPath will return an object if the pathname is exactly same with the routes.path
      return matchPath(pathname, { path: r.path, exact: true, strict: false });
    });
    const authorized =
      matched && matched.auth && matched.auth.length
        ? matched.auth.includes(user.userGroup)
        : true;
    return {
      authorized,
    };
  }

  redirectRoute(props) {
    const { location, history, user } = props;
    const { pathname } = location;

    if (isEmpty(user)) {
      history.push({
        pathname: "/user/unauthenticated",
        state: { redirectUrl: pathname },
      });
    } else {
      history.push({
        pathname: "/user/unauthorized",
        state: { redirectUrl: pathname },
      });
    }
  }

  render() {
    let { route } = this.props;
    const { authorized } = this.state;

    return authorized ? (
      <Fragment>
        <GullLayout route={route}></GullLayout>
      </Fragment>
    ) : null;
  }
}

AuthGuard.contextType = AppContext;

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(
  connect(mapStateToProps, { logout, setUserData })(AuthGuard)
);
