import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { login } from "app/redux/actions/LoginActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SigninSchema = yup.object().shape({
  login: yup.string().required("Login is required"),
  password: yup.string().required("Password is required"),
});

class Signin extends Component {
  state = {
    login: "",
    password: "",
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (value, { isSubmitting }) => {
    this.props.login(value);
  };

  render() {
    return (
      <div
        className="auth-layout-wrap"
        style={{
          backgroundImage: "url(/assets/images/photo-wide-4.jpg)",
        }}
      >
        <div className="auth-content">
          <div className="card o-hidden">
            <div className="row">
              <div className="col-md-6">
                <div className="p-4">
                  <div className="auth-logo text-center mb-4">
                    <img src="/assets/images/logo.png" alt="" />
                  </div>
                  <h1 className="mb-3 text-18">Sign In</h1>
                  <Formik
                    initialValues={this.state}
                    validationSchema={SigninSchema}
                    onSubmit={this.handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="login">Login</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="text"
                            name="login"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.login}
                          />
                          {errors.login && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.login}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            className="form-control form-control-rounded"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {errors.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        {this.props.loading ? (
                          <div className="text-center w-100 my-1 mt-2">
                            <div className="spinner spinner-primary me-3"></div>
                          </div>
                        ) : (
                          <button
                            className="btn btn-rounded btn-primary w-100 my-1 mt-2"
                            type="submit"
                          >
                            Sign In
                          </button>
                        )}
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
              <div
                className="col-md-6 text-center "
                style={{
                  backgroundSize: "cover",
                  backgroundImage: "url(/assets/images/login-form-photo.jpg)",
                }}
              >
                <div className="pe-3 auth-right">
                  <div className="text-danger mt-1 ml-2">
                    {this.props.loginError}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: PropTypes.func.isRequired,
  loginError: state.login.error,
  loading: state.login.loading,
});

export default connect(mapStateToProps, {
  login,
})(Signin);
