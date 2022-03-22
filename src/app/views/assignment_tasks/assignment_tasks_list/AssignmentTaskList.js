import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdModeEdit, MdRemoveRedEye, MdDelete } from "react-icons/md";
import { getStatus } from "app/views/shared/function/getStatus";

import { AssignmentTasks } from "fake-db/static_data/AssignmentTaskLists";

let { SearchBar } = Search;

const AssignmentTaskList = (props) => {
  const resolvedAssignmentTasks = AssignmentTasks.map((task, index) => {
    let status = getStatus(task.collectionDate, task.assignmentDate);

    let actions = {
      view: "/assignment/" + task.id,
      edit: "/assignment/edit/" + task.id,
      delete: "/assignment/delete/" + task.id,
    };

    return {
      ...task,
      status: status,
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
          <Link className="p-2 btn-hover rounded-circle" to={cell.delete}>
            <MdDelete className="cursor-pointer" size={24}></MdDelete>
          </Link>
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
      dataField: "assignmentDate",
      text: "Assignment Deadline",
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
    totalSize: resolvedAssignmentTasks.length,
  };

  return (
    <div>
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
          data={resolvedAssignmentTasks}
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

export default AssignmentTaskList;
