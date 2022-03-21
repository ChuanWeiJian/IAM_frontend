import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import {
  setPage,
  setRowsPerPage,
} from "app/redux/actions/AssignmentTaskInfoActions";
import {
  AssignmentTasks,
  examCenters,
  examCenterData,
} from "fake-db/static_data/AssignmentTaskInfo";
import { getStatus } from "app/views/shared/function/getStatus";
import ExamCenterDataSummary from "./components/ExamCenterDataSummary";

const AssignmentTaskInfo = (props) => {
  const taskId = useParams().taskId;
  const AssignmentTask = AssignmentTasks.find((task) => task.id === taskId);
  const involvedExamCenters = AssignmentTask.examCenters.map((examCenterId) => {
    return examCenters.find((examCenter) => examCenter.id === examCenterId);
  });

  console.log(AssignmentTask);

  let status = getStatus(
    AssignmentTask.collectionDate,
    AssignmentTask.assignmentDate
  );

  let collectedExamCenterData;

  if (status !== "Collection in progress") {
    collectedExamCenterData = examCenterData.filter(
      (data) => data.assignmentTaskId === AssignmentTask.id
    );
  }

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

  const handlePageClick = (data) => {
    let page = data.selected;
    props.setPage(page);
  };

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List", path: "/assignment/list" },
          { name: AssignmentTask.title },
        ]}
      ></Breadcrumb>
      <SimpleCard>
        <h4 className="mb-4">Assignment Task Information</h4>
        <div className="row">
          <div className="col-md-3">
            <div className="mb-4">
              <p className="text-primary mb-1 h5">Title</p>
              <span>{AssignmentTask.title}</span>
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
              <span>{AssignmentTask.collectionDate}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-4">
              <p className="text-primary mb-1 h5">Assignment Task Deadline</p>
              <span>{AssignmentTask.assignmentDate}</span>
            </div>
          </div>
        </div>

        <div className="custom-separator"></div>

        <h5>Exam Centers</h5>
        <div className="row px-4 mt-3">
          <div className="col-sm-12 col-md-6 mb-2">
            <div className="d-flex align-items-center">
              <span className="mr-1">Show &nbsp;</span>
              <div className="mr-1">
                <select
                  className="form-control"
                  onChange={({ target: { value } }) => {
                    props.setRowPerPage(value);
                  }}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <span>&nbsp; entries</span>
            </div>
          </div>
        </div>

        <div className="card-body pt-1">
          <div className="table-responsive">
            <table className="display table w-100">
              <thead>
                <tr>
                  <th>No</th>
                  <th>School Code</th>
                  <th>Exam Center Code</th>
                  <th>School Name</th>
                </tr>
              </thead>
              <tbody>
                {involvedExamCenters
                  .slice(
                    props.rowsPerPage * props.page,
                    props.rowsPerPage * (props.page + 1)
                  )
                  .map((examCenter, index) => {
                    return (
                      <tr key={examCenter.id}>
                        <td>{index + 1}</td>
                        <td>{examCenter.schoolCode}</td>
                        <td>{examCenter.examCenterCode}</td>
                        <td>{examCenter.name}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end mr-lg-4">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(
                involvedExamCenters.length / props.rowsPerPage
              )}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination pagination-lg"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>

        <div className="custom-separator"></div>

        <h5>Exam Center Data Summary</h5>
        <ExamCenterDataSummary
          status={status}
          examCenterData={collectedExamCenterData}
          assignmentTask={AssignmentTask}
        />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.assignmentTaskInfo.page,
    rowsPerPage: state.assignmentTaskInfo.rowsPerPage,
  };
};

export default connect(mapStateToProps, {
  setPage: setPage,
  setRowsPerPage: setRowsPerPage,
})(AssignmentTaskInfo);
