import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { MdModeEdit, MdRemoveRedEye, MdDelete } from "react-icons/md";
import swal from "sweetalert2";
import { examCenters } from "fake-db/static_data/ExamCenter";

const { SearchBar } = Search;

const ExamCentersList = (props) => {
  const resolvedExamCenters = examCenters.map((center, index) => {
    let actions = {
      view: "/examcenter/" + center.id,
      edit: "/examcenter/edit/" + center.id,
      delete: "/examcenter/delete" + center.id,
    };

    return {
      ...center,
      actions: actions,
      index: index + 1,
    };
  });

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
                  text: `Confirm to delete ${row.schoolCode} - ${row.examCenterCode} - ${row.name}`,
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
                    console.log("Deleting");
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
      dataField: "schoolCode",
      text: "School Code",
      sort: true,
    },
    {
      dataField: "examCenterCode",
      text: "Exam Center Code",
      sort: true,
    },
    {
      dataField: "name",
      text: "Exam Center Name",
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
    totalSize: resolvedExamCenters.length,
  };
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Exam Centers", path: "/examcenter" },
          { name: "Exam Centers List" },
        ]}
      ></Breadcrumb>
      <SimpleCard title="Exam Centers List">
        <ToolkitProvider
          striped
          keyField="id"
          data={resolvedExamCenters}
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

export default ExamCentersList;
