import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

const ExamCenterListModal = (props) => {
  return (
    <Fragment>
      <Button
        type="button"
        className="text-capitalize btn btn-dark"
        onClick={() => props.toggleModal(true)}
      >
        All registered exam centers
      </Button>
      <Modal
        show={props.showModal}
        onHide={() => props.toggleModal(false)}
        size="lg"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-4">
            <div className="col-md-12 mb-4">
              <div className="text-left p-1">
                <div className="p-3">
                  <h4 className="mb-2">Registered Exam Centers</h4>
                  <ul className="list-group">
                    {props.items.map((examCenter) => {
                      return (
                        <li
                          className="list-group-item"
                          key={examCenter.id}
                        >{`${examCenter.school.schoolCode} - ${examCenter.examCenterCode} - ${examCenter.school.name}`}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.toggleModal(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ExamCenterListModal;
