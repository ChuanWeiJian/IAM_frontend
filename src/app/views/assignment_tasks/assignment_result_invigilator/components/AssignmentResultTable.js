import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import _ from "lodash";

const AssignmentResultTable = ({ results }) => {
  const renderRole = (cell, row, rowIndex) => {
    return _.startCase(cell);
  };

  const sortableColumn = [
    {
      dataField: "index",
      text: "No",
      sort: true,
    },
    {
      dataField: "assignmentTask.title",
      text: "Task Title",
      sort: true,
    },
    {
      dataField: "assignmentTask.examType",
      text: "Exam Type",
      sort: true,
    },
    {
      dataField: "assignedTo.school.schoolCode",
      text: "Assigned School Code",
      sort: true,
    },
    {
      dataField: "assignedTo.examCenterCode",
      text: "Assigned Exam Center Code",
      sort: true,
    },
    {
      dataField: "assignedTo.school.schoolName",
      text: "Assigned School Name",
      sort: true,
    },
    {
      dataField: "role",
      text: "Role",
      sort: true,
      formatter: renderRole,
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
    totalSize: results.length,
  };

  return (
    <ToolkitProvider
      striped
      keyField="index"
      data={results}
      columns={sortableColumn}
      search
    >
      {(props) => (
        <>
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
  );
};

export default AssignmentResultTable;
