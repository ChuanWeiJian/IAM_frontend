import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdPeople, MdModeEdit, MdRemoveRedEye, MdEmail } from "react-icons/md";

const ActionButtons = ({ role, assignmentTask, isComplete }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {isComplete ? (
        <React.Fragment>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">View Assignment Result</Tooltip>}
          >
            <Link
              className="p-2 btn-hover rounded-circle"
              to={`/assignment/result/${role}/${assignmentTask.id}`}
            >
              <MdRemoveRedEye
                className="cursor-pointer"
                size={24}
              ></MdRemoveRedEye>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">Edit</Tooltip>}
          >
            <Link
              className="p-2 btn-hover rounded-circle"
              to={`/assignment/result/edit/${role}/${assignmentTask.id}`}
            >
              <MdModeEdit className="cursor-pointer" size={24}></MdModeEdit>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">Send Formal Letter</Tooltip>}
          >
            <Link
              className="p-2 btn-hover rounded-circle"
              to={`/assignment/letter/${role}/${assignmentTask.id}`}
            >
              <MdEmail className="cursor-pointer" size={24}></MdEmail>
            </Link>
          </OverlayTrigger>
        </React.Fragment>
      ) : (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-top">Assign</Tooltip>}
        >
          <Link
            className="p-2 btn-hover rounded-circle"
            to={`/api/assignment/assign/${role}/${assignmentTask.id}`}
          >
            <MdPeople className="cursor-pointer" size={24}></MdPeople>
          </Link>
        </OverlayTrigger>
      )}
    </div>
  );
};

export default ActionButtons;
