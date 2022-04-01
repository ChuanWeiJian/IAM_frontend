import React, { useEffect } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import { setPage, setRowsPerPage } from "app/redux/actions/TableActions";
import { getAssignmentTaskInfo } from "app/redux/actions/AssignmentTaskInfoActions";
import ExamCenterDataSummary from "./components/ExamCenterDataSummary";
import AssignmentTaskInfoHeader from "../shared/components/AssignmentTaskInfoHeader";

const AssignmentTaskInfo = (props) => {
  const taskId = useParams().taskId;

  useEffect(() => {
    props.getAssignmentTaskInfo(taskId);
  }, []);

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
          { name: props.assignmentTask.title },
        ]}
      ></Breadcrumb>
      <SimpleCard>
        <AssignmentTaskInfoHeader
          assignmentTask={props.assignmentTask}
          status={props.status}
        />

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
                    props.setRowsPerPage(value);
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
                {props.involvedExamCenters
                  .slice(
                    props.rowsPerPage * props.page,
                    props.rowsPerPage * (props.page + 1)
                  )
                  .map((examCenter, index) => {
                    return (
                      <tr key={examCenter.id}>
                        <td>{index + 1}</td>
                        <td>{examCenter.school.schoolCode}</td>
                        <td>{examCenter.examCenterCode}</td>
                        <td>{examCenter.school.name}</td>
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
                props.involvedExamCenters.length / props.rowsPerPage
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
          status={props.status}
          examCenterData={props.collectedExamCenterData}
          assignmentTask={props.assignmentTask}
        />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assignmentTask: state.assignmentTaskInfo.assignmentTask,
    involvedExamCenters: state.assignmentTaskInfo.involvedExamCenters,
    status: state.assignmentTaskInfo.status,
    collectedExamCenterData: state.assignmentTaskInfo.examCenterData,
    page: state.table.page,
    rowsPerPage: state.table.rowsPerPage,
  };
};

export default connect(mapStateToProps, {
  getAssignmentTaskInfo,
  setPage,
  setRowsPerPage,
})(AssignmentTaskInfo);
