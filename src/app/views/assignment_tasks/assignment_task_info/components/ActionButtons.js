import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdPeople, MdModeEdit, MdRemoveRedEye, MdEmail } from "react-icons/md";
import _ from "lodash";
import axios from "axios";
import swal from "sweetalert2";

import { setError, resetError } from "app/redux/actions/ErrorModalActions";
import { updateAssignmentTask } from "app/redux/actions/AssignmentTaskInfoActions";

const ActionButtons = (props) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {props.isComplete ? (
        <React.Fragment>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">View Assignment Result</Tooltip>}
          >
            <Link
              className="p-2 btn-hover rounded-circle"
              to={`/assignment/result/${props.role}/${props.assignmentTask.id}`}
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
              to={`/assignment/result/edit/${props.role}/${props.assignmentTask.id}`}
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
              to={`/assignment/letter/${props.role}/${props.assignmentTask.id}`}
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
          <div
            className="p-2 btn-hover rounded-circle"
            onClick={() => {
              swal
                .fire({
                  title: "Are you sure?",
                  text: `Confirm to start the assigning of ${_.startCase(
                    props.role
                  )}?`,
                  icon: "warning",
                  type: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes",
                  cancelButtonText: "No",
                })
                .then((result) => {
                  if (result.value) {
                    swal.fire({
                      title: `Assigning ${_.startCase(props.role)}...`,
                      onBeforeOpen: () => {
                        swal.showLoading();
                      },
                      onOpen: async () => {
                        //submit form process here remember to async and await with try...catch block
                        try {
                          await axios({
                            method: "GET",
                            url: `${process.env.REACT_APP_BACKEND_URL}/assignments/assign/${props.assignmentTask.id}/${props.role}`,
                          }).then((response) => {
                            swal.hideLoading();
                            swal
                              .fire({
                                title: "Complete Assigning",
                                icon: "success",
                                allowOutsideClick: false,
                              })
                              .then((result) => {
                                props.updateAssignmentTask(
                                  response.data.assignmentTask
                                );
                              });
                          });
                        } catch (err) {
                          swal.hideLoading();
                          props.setError(err);
                        }
                      },
                      allowOutsideClick: false,
                    });
                  } else {
                    swal.fire("Cancelled!", "Permission denied.", "error");
                  }
                });
            }}
          >
            <MdPeople
              className="cursor-pointer text-primary"
              size={24}
            ></MdPeople>
          </div>
        </OverlayTrigger>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  setError,
  resetError,
  updateAssignmentTask,
})(ActionButtons);
