import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";

import SchoolInformationHeader from "./components/SchoolInformationHeader";
import ExamCenterList from "./components/ExamCenterList";
import { getSchoolInformationById } from "app/redux/actions/SchoolInformationActions";

const ExamCenterInformation = (props) => {
  const schoolId = useParams().schoolId;
  useEffect(() => {
    props.getSchoolInformationById(schoolId);
  }, []);

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "School & Exam Centers", path: "/examcenter" },
          { name: "Registered School List", path: "/school/list" },
          { name: "School Information" },
        ]}
      ></Breadcrumb>
      <SchoolInformationHeader
        schoolCode={props.school.schoolCode}
        examCenterCount={
          props.school.examCenters ? props.school.examCenters.length : 0
        }
        name={props.school.name}
        address={props.school.address}
      />
      <div className="mb-5"></div>

      <SimpleCard title="Registered Exam Centers">
        <ExamCenterList
          examCenters={props.school.examCenters ? props.school.examCenters : []}
        />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    school: state.schoolInformation.school,
  };
};

export default connect(mapStateToProps, {
  getSchoolInformationById,
})(ExamCenterInformation);
