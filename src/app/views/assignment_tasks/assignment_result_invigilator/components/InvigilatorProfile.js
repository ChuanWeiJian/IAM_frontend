import React from "react";

const TeacherProfile = (props) => {
  const profile = props.profile;

  return (
    <React.Fragment>
      <h4>Personal Information</h4>
      <hr />
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Male-21 text-16 mr-1"></i> Teacher Name
            </p>
            <span>{profile.teacherName}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-MaleFemale text-16 mr-1"></i> Gender
            </p>
            <span>{profile.teacherSex}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-ID-Card text-16 mr-1"></i>
              IC Number
            </p>
            <span>{profile.icNumber}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Telephone text-16 mr-1"></i> Phone Number
            </p>
            <span>{profile.teacherPhoneNumber}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Email text-16 mr-1"></i> Email
            </p>
            <span>{profile.teacherEmailAddress}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Home1 text-16 mr-1"></i>
              Home Address
            </p>
            <span>{profile.homeAddress}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Administrator text-16 mr-1"></i> Race
            </p>
            <span>{profile.race}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Business-ManWoman text-16 mr-1"></i>
              Teacher Staff Type Code
            </p>
            <span>{profile.teacherTypesStaffCode}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Doctor text-16 mr-1"></i> Teacher Position Code
            </p>
            <span>{profile.teacherPositionCode}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Folders text-16 mr-1"></i> JPN File Code
            </p>
            <span>{profile.jpnFileCode}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-Money1 text-16 mr-1"></i> Salary Grade
            </p>
            <span>{profile.salaryGrade}</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-4">
            <p className="text-primary mb-1">
              <i className="i-University text-16 mr-1"></i> Original School
            </p>
            <span>
              {profile.user
                ? `${profile.user.school.schoolCode} - ${profile.user.school.schoolName}`
                : ""}
            </span>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default TeacherProfile;
