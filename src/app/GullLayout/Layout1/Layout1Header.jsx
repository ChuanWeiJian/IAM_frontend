import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
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
            <Dropdown>
              <Dropdown.Toggle
                as="span"
                className="toggle-hidden cursor-pointer"
              >
                <img
                  src="/assets/images/faces/1.jpg"
                  id="userDropdown"
                  alt=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="dropdown-header">
                  <i className="i-Lock-User me-1"></i> Timothy Carlson
                </div>
                <Link to="/" className="dropdown-item cursor-pointer">
                  Account settings
                </Link>
                <Link
                  to="/"
                  className="dropdown-item cursor-pointer"
                  onClick={this.props.logoutUser}
                >
                  Sign out
                </Link>
              </Dropdown.Menu>
            </Dropdown>
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
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings,
    setDefaultSettings,
    logoutUser,
  })(Layout1Header)
);
