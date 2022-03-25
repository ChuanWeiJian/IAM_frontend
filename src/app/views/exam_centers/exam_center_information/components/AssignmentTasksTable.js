import React from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { getStatus } from "app/views/shared/function/getStatus";

const AssignmentTaskTable = (props) => {
  return (
    <>
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
                <th>Assignment Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {props.assignmentTasks
                .slice(
                  props.rowsPerPage * props.page,
                  props.rowsPerPage * (props.page + 1)
                )
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Link to={`/assignment/${task.id}`}>{task.title}</Link>
                      </td>
                      <td>
                        {getStatus(task.collectionDate, task.assignmentDate)}
                      </td>
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
              props.assignmentTasks.length / props.rowsPerPage
            )}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={(data) => {
              let page = data.selected;
              props.setPage(page);
            }}
            containerClassName={"pagination pagination-lg"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};

export default AssignmentTaskTable;
