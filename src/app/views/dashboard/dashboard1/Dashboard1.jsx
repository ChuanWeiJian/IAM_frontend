import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb } from "@gull";

import NormalDashboard from "./components/NormalDashboard";
import UserDashboard from "./components/UserDashboard";
import ErrorModal from "app/views/shared/components/ErrorModal";

const Dashboard1 = (props) => {
  return (
    <div>
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "Dashboard", path: "/" },
          { name: "Invigilator Assignment based on District Module" },
        ]}
      ></Breadcrumb>
      {props.user.userGroup ? (
        <UserDashboard userGroup={props.user.userGroup}></UserDashboard>
      ) : (
        <NormalDashboard></NormalDashboard>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, httpError: state.error.error };
};

export default connect(mapStateToProps)(Dashboard1);
