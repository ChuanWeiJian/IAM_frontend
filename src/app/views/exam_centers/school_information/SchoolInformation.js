import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";

import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import SchoolInformationHeader from "./components/SchoolInformationHeader";
import ExamCenterList from "./components/ExamCenterList";
import EditExamCenter from "./components/EditExamCenter";
import { getSchoolInformationById } from "app/redux/actions/SchoolInformationActions";
import { resetError, setError } from "app/redux/actions/ErrorModalActions";

const ExamCenterInformation = (props) => {
  const schoolId = useParams().schoolId;
  useEffect(() => {
    props.getSchoolInformationById(schoolId);
  }, []);

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "School & Exam Centers", path: "/examcenter" },
          { name: "Registered School List", path: "/school/list" },
          { name: "School Information" },
        ]}
      ></Breadcrumb>
      <SchoolInformationHeader
        school={props.school}
      />
      <div className="mb-5"></div>

      <SimpleCard title="Registered Exam Centers">
        <ExamCenterList />
        <EditExamCenter />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    school: state.schoolInformation.school,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  getSchoolInformationById,
  setError,
  resetError,
})(ExamCenterInformation);
