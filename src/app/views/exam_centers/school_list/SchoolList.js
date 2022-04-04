import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  MdModeEdit,
  MdRemoveRedEye,
  MdAddCircle,
} from "react-icons/md";
import {
  getSchoolListData,
  toggleForm,
  toggleExamCenterListModal,
  setSelectedIndex,
} from "app/redux/actions/SchoolListActions";
import NewExamCenter from "./components/NewExamCenter";

const { SearchBar } = Search;

const SchoolList = (props) => {
  useEffect(() => {
    props.getSchoolListData();
  }, []);

  const renderActionButtons = (cell, row, rowIndex) => {
    return (
      <div className="d-flex flex-wrap align-items-center">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-top">Register New Exam Center</Tooltip>}
        >
          <div
            className="p-2 btn-hover rounded-circle"
            onClick={() => {
              props.setSelectedIndex(rowIndex);
              props.toggleForm(true);
            }}
          >
            <MdAddCircle
              className="cursor-pointer text-primary"
              size={24}
            ></MdAddCircle>
          </div>
        </OverlayTrigger>
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
      dataField: "name",
      text: "School Name",
      sort: true,
    },
    {
      dataField: "examCenters.length",
      text: "Exam Center(s)",
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
    totalSize: props.schools.length,
  };
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Schools & Exam Centers", path: "/examcenter" },
          { name: "School List" },
        ]}
      ></Breadcrumb>
      <NewExamCenter
        showForm={props.showForm}
        toggleForm={props.toggleForm}
        school={props.schools[props.selectedIndex]}
        examCenters={props.examCenters}
        toggleExamCenterListModal={props.toggleExamCenterListModal}
        showModal={props.showModal}
      />
      <SimpleCard title="Registered School List">
        <ToolkitProvider
          striped
          keyField="id"
          data={props.schools}
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
    showForm: state.schoolList.showForm,
    showModal: state.schoolList.showModal,
    selectedIndex: state.schoolList.selectedIndex,
    schools: state.schoolList.schools,
    examCenters: state.schoolList.examCenters,
  };
};

export default connect(mapStateToProps, {
  getSchoolListData,
  toggleForm,
  toggleExamCenterListModal,
  setSelectedIndex,
})(SchoolList);
