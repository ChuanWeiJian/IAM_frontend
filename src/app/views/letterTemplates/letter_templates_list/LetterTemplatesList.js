import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { MdModeEdit, MdRemoveRedEye, MdDelete } from "react-icons/md";
import SweetAlert from "sweetalert2-react";
import swal from "sweetalert2";

import { LetterTemplates } from "fake-db/static_data/LetterTemplate";

let { SearchBar } = Search;

const LetterTemplatesList = (props) => {
  const resolvedLetterTemplates = LetterTemplates.map((template, index) => {
    let actions = {
      view: "/letter/" + template.id,
      edit: "/letter/edit/" + template.id,
      delete: "/letter/delete" + template.id,
    };

    return {
      ...template,
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
                  text: `Confirm to delete ${row.title}`,
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
      dataField: "title",
      text: "Letter Template Title",
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
    totalSize: resolvedLetterTemplates.length,
  };
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Letter Templates", path: "/letter" },
          { name: "Letter Templates List" },
        ]}
      ></Breadcrumb>
      <SimpleCard title="Letter Templates List">
        <ToolkitProvider
          striped
          keyField="id"
          data={resolvedLetterTemplates}
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

export default LetterTemplatesList;
