import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import _ from "lodash";

import ErrorModal from "app/views/shared/components/ErrorModal";
import Loader from "app/views/shared/components/Loader";
import TeacherProfile from "./components/InvigilatorProfile";
import AssignmentResultTable from "./components/AssignmentResultTable";
import { resetError } from "app/redux/actions/ErrorModalActions";
import { getAllAssignmentResults } from "app/redux/actions/AssignmentResultInvigilatorActions";

const AssignmentResultInvigilator = (props) => {
  useEffect(() => {
    props.getAllAssignmentResults(props.userId);
  }, []);

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb routeSegments={[{ name: "Assignment Result" }]}></Breadcrumb>
      <SimpleCard>
        <TeacherProfile profile={props.profile} />
        <AssignmentResultTable
          results={
            props.profile.listOfInvigilatorExperience
              ? props.profile.listOfInvigilatorExperience
              : []
          }
        />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    profile: state.assignmentResultInvigilator.profile,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  getAllAssignmentResults,
  resetError,
})(AssignmentResultInvigilator);
