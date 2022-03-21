import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const AssignmentResultTable = ({ results }) => {
  const sortableColumn = [
    {
      dataField: "index",
      text: "No",
      sort: true,
    },
    {
      dataField: "examCenter.schoolCode",
      text: "Assigned School Code",
      sort: true,
    },
    {
      dataField: "examCenter.examCenterCode",
      text: "Assigned Exam Center Code",
      sort: true,
    },
    {
      dataField: "examCenter.name",
      text: "Assigned School Name",
      sort: true,
    },
    {
      dataField: "invigilator.name",
      text: "Invigilator",
      sort: true,
    },
    {
      dataField: "invigilator.ic",
      text: "I.C.",
    },
    {
      dataField: "invigilator.gender",
      text: "Gender",
      sort: true,
    },
    {
      dataField: "invigilator.email",
      text: "Email",
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
