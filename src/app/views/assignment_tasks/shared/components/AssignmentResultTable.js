import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

const AssignmentResultTable = ({ results }) => {
  const sortableColumn = [
    {
      dataField: "index",
      text: "No",
      sort: true,
    },
    {
      dataField: "examCenter.school.schoolCode",
      text: "Assigned School Code",
      sort: true,
    },
    {
      dataField: "examCenter.examCenterCode",
      text: "Assigned Exam Center Code",
      sort: true,
    },
    {
      dataField: "examCenter.school.schoolName",
      text: "Assigned School Name",
      sort: true,
    },
    {
      dataField: "invigilator.teacherName",
      text: "Invigilator",
      sort: true,
    },
    {
      dataField: "invigilator.icNumber",
      text: "I.C.",
    },
    {
      dataField: "invigilator.teacherSex",
      text: "Gender",
      sort: true,
    },
    {
      dataField: "invigilator.teacherEmailAddress",
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
