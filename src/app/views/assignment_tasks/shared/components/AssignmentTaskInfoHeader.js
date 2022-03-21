import React from "react";
import { Badge } from "react-bootstrap";

const AssignmentTaskInfoHeader = ({ assignmentTask, status }) => {
  const renderStatus = () => {
    switch (status) {
      case "Collection in progress":
        return (
          <Badge className="bg-primary rounded-pill text-white p-2">
            {status}
          </Badge>
        );
      case "Assigning in progress":
        return (
          <Badge className="bg-secondary rounded-pill text-white p-2">
            {status}
          </Badge>
        );
      default:
        return (
          <Badge className="bg-success rounded-pill text-white p-2">
            {status}
          </Badge>
        );
    }
  };
  return (
    <React.Fragment>
      <h4 className="mb-4">Assignment Task Information</h4>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-4">
            <p className="text-primary mb-1 h5">Title</p>
            <span>{assignmentTask.title}</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-4">
            <p className="text-primary mb-1 h5">Status</p>
            {renderStatus()}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-4">
            <p className="text-primary mb-1 h5">Data Collection Deadline</p>
            <span>{assignmentTask.collectionDate}</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-4">
            <p className="text-primary mb-1 h5">Assignment Task Deadline</p>
            <span>{assignmentTask.assignmentDate}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AssignmentTaskInfoHeader;
