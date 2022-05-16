import React, { Component } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { resetDashboardData } from "app/redux/actions/DashboardActions";
import { logout } from "app/redux/actions/LoginActions";
import { withRouter } from "react-router-dom";

import { merge } from "lodash";

class Layout1Header extends Component {
  handleMenuClick = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout1Settings: {
          leftSidebar: {
            open: settings.layout1Settings.leftSidebar.secondaryNavOpen
              ? true
              : !settings.layout1Settings.leftSidebar.open,
            secondaryNavOpen: false,
          },
        },
      })
    );
  };

  toggleFullScreen = () => {
    if (document.fullscreenEnabled) {
      if (!document.fullscreen) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  };

  handleSearchBoxOpen = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout1Settings: {
          searchBox: {
            open: true,
          },
        },
      })
    );
  };

  render() {
    return (
      <div className="main-header">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="" />
        </div>

        <div className="menu-toggle" onClick={this.handleMenuClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div style={{ margin: "auto" }}></div>

        <div className="header-part-right">
          <i
            className="i-Full-Screen header-icon d-none d-sm-inline-block"
            data-fullscreen
            onClick={this.toggleFullScreen}
          ></i>

          <div className="user col px-3">
            {this.props.login ? (
              <Dropdown>
                <Dropdown.Toggle
                  as="span"
                  className="toggle-hidden cursor-pointer"
                >
                  <img
                    src={
                      this.props.user.district !== ""
                        ? `/assets/images/Flag/${this.props.user.district}.png`
                        : `/assets/images/faces/admin.png`
                    }
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="dropdown-header">
                    <i className="i-Lock-User me-1"></i> {this.props.user.login}
                  </div>
                  <div className="dropdown-header">
                    <i className="i-Map-Marker"></i> {this.props.user.district}
                  </div>

                  <Link
                    to="/"
                    className="dropdown-item cursor-pointer"
                    onClick={() => {
                      this.props.resetDashboardData();
                      this.props.logoutUser();
                      this.props.logout();
                    }}
                  >
                    Sign out
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/session/signin">
                <Button
                  variant={`outline-primary`}
                  className="m-1 text-capitalize"
                >
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Layout1Header.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: state.user,
  settings: state.layout.settings,
  login: state.login.success,
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings,
    setDefaultSettings,
    logoutUser,
    logout,
    resetDashboardData,
  })(Layout1Header)
);
