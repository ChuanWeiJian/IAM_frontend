import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdModeEdit, MdRemoveRedEye, MdDelete } from "react-icons/md";
import swal from "sweetalert2";

import {
  initializeForm,
  toggleForm,
} from "app/redux/actions/SchoolInformationActions";
import { Scatter } from "recharts";

const { SearchBar } = Search;

const ExamCentersList = (props) => {
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
          <div
            className="p-2 btn-hover rounded-circle"
            onClick={() => {
              props.initializeForm(rowIndex);
              props.toggleForm(true);
            }}
          >
            <MdModeEdit
              className="cursor-pointer text-primary"
              size={24}
            ></MdModeEdit>
          </div>
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
                  text: `Confirm to delete ${row.examCenterCode}?`,
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
      dataField: "examCenterCode",
      text: "Exam Center Code",
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
    totalSize: props.examCenters.length,
  };
  return (
    <div>
      <ToolkitProvider
        striped
        keyField="id"
        data={props.examCenters}
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    examCenters: state.schoolInformation.school.examCenters
      ? state.schoolInformation.school.examCenters
      : [],
  };
};

export default connect(mapStateToProps, { initializeForm, toggleForm })(
  ExamCentersList
);