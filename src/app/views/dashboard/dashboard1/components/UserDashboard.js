import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboardInfo } from "app/redux/actions/DashboardActions";

import QuickLink from "./QuickLInk";
import AdminDashboardChart from "./AdminDashboardChart";
import OfficerDashboardChart from "./OfficerDashboardChart";
import TeacherDashboardChart from "./TeacherDashboardChart";

const UserDashboard = (props) => {
  useEffect(() => {
    props.getDashboardInfo(props.userGroup);
  }, []);

  const renderChart = (userGroup) => {
    switch (userGroup) {
      case "Admin":
        return <AdminDashboardChart data={props.data} />;
      case "Officer":
        return <OfficerDashboardChart data={props.data} />;
      default:
        return <TeacherDashboardChart data={props.data} />;
    }
  };

  return (
    <div>
      <QuickLink userGroup={props.userGroup} />
      {renderChart(props.userGroup)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.dashboard.data };
};

export default connect(mapStateToProps, { getDashboardInfo })(UserDashboard);
