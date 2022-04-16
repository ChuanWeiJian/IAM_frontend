import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdModeEdit, MdRemoveRedEye, MdDelete } from "react-icons/md";
import swal from "sweetalert2";
import { getAllAssignmentTasks } from "app/redux/actions/AssignmentTasksListActions";
import axios from "axios";

import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import { setError, resetError } from "app/redux/actions/ErrorModalActions";

let { SearchBar } = Search;

const AssignmentTaskList = (props) => {
  useEffect(() => {
    props.getAllAssignmentTasks();
  }, []);

  const renderActionButtons = (cell, row, rowIndex) => {
    return (
      <div className="d-flex flex-wrap align-items-center">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-top">View</Tooltip>}
        >
          <Link className="p-2 btn-hover rounded-circle" to={cell.view}>
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
          <Link className="p-2 btn-hover rounded-circle" to={cell.edit}>
            <MdModeEdit className="cursor-pointer" size={24}></MdModeEdit>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-top">Delete</Tooltip>}
        >
          <div
            className="p-2 btn-hover rounded-circle"
            onClick={() => {
              swal
                .fire({
                  title: "Are you sure?",
                  text: `Confirm to delete ${row.title}?`,
                  icon: "warning",
                  type: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                  cancelButtonText: "No",
                })
                .then((result) => {
                  if (result.value) {
                    console.log(`Deleting - ${cell.delete}`);

                    swal.fire(
                      "Deleted!",
                      "Your file has been deleted.",
                      "success"
                    );
                  } else {
                    swal.fire("Cancelled!", "Permission denied.", "error");
                  }
                });
            }}
          >
            <MdDelete
              className="cursor-pointer text-primary"
              size={24}
            ></MdDelete>
          </div>
        </OverlayTrigger>
      </div>
    );
  };

  const sortableColumn = [
    {
      dataField: "index",
      text: "No",
      sort: true,
    },
    {
      dataField: "title",
      text: "Assignment Task",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
    },
    {
      dataField: "createdDate",
      text: "Date Created",
      sort: true,
    },
    {
      dataField: "collectionDate",
      text: "Collection Deadline",
      sort: true,
    },
    {
      dataField: "actions",
      text: "Action",
      formatter: renderActionButtons,
    },
  ];

  const paginationOptions = {
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    totalSize: props.resolvedAssignmentTasks.length,
  };

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List" },
        ]}
      ></Breadcrumb>
      <SimpleCard title="Assignment Tasks List">
        <ToolkitProvider
          striped
          keyField="id"
          data={props.resolvedAssignmentTasks}
          columns={sortableColumn}
          search
        >
          {(props) => (
            <>
              <div className="d-flex justify-content-start align-items-center">
                <SearchBar {...props.searchProps} className="mb-2" />
              </div>
              <BootstrapTable
                {...props.baseProps}
                bootstrap4
                pagination={paginationFactory(paginationOptions)}
                noDataIndication={"Table is empty"}
                wrapperClasses="table-responsive"
              />
            </>
          )}
        </ToolkitProvider>
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resolvedAssignmentTasks: state.assignmentTasksList.assignmentTasks,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  getAllAssignmentTasks,
  resetError,
  setError,
})(AssignmentTaskList);
