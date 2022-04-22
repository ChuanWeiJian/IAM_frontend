import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, SimpleCard } from "@gull";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdModeEdit, MdDelete, MdVpnKey } from "react-icons/md";
import swal from "sweetalert2";
import { Badge } from "react-bootstrap";
import axios from "axios";

import Loader from "app/views/shared/components/Loader";
import ErrorModal from "app/views/shared/components/ErrorModal";
import ChangePassword from "./components/ChangePassword";
import { setError, resetError } from "app/redux/actions/ErrorModalActions";
import {
  getAllOfficerAccounts,
  removeAccount,
  toggleForm,
  setSelectedIndex,
} from "app/redux/actions/OfficerAccountsListActions";
let { SearchBar } = Search;

const AssignmentTaskList = (props) => {
  useEffect(() => {
    props.getAllOfficerAccounts();
  }, []);

  const renderActionButtons = (cell, row, rowIndex) => {
    return (
      <div className="d-flex flex-wrap align-items-center">
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
          overlay={<Tooltip id="tooltip-top">Change Password</Tooltip>}
        >
          <div
            className="p-2 btn-hover rounded-circle"
            onClick={() => {
              props.setSelectedIndex(row.index - 1);
              props.toggleForm(true);
            }}
          >
            <MdVpnKey
              className="cursor-pointer text-primary"
              size={24}
            ></MdVpnKey>
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
                  text: `Confirm to delete ${row.login}? `,
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
                    swal.fire({
                      title: "Deleting account...",
                      onBeforeOpen: () => {
                        swal.showLoading();
                      },
                      onOpen: async () => {
                        //submit form process here remember to async and await with try...catch block
                        try {
                          await axios({
                            method: "DELETE",
                            url: `${process.env.REACT_APP_BACKEND_URL}/users/officer/${row.id}`,
                          }).then((response) => {
                            swal.hideLoading();
                            swal
                              .fire({
                                title: "Successfully Delete Officer Account",
                                icon: "success",
                                allowOutsideClick: false,
                              })
                              .then((result) => {
                                props.removeAccount(row.id);
                              });
                          });
                        } catch (err) {
                          swal.hideLoading();
                          props.setError(err);
                        }
                      },
                      allowOutsideClick: false,
                    });
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

  const renderStatus = (cell, row, rowIndex) => {
    switch (cell) {
      case 1:
        return (
          <Badge className="bg-success rounded-pill text-white p-2">
            Active
          </Badge>
        );
      default:
        return (
          <Badge className="bg-danger rounded-pill text-white p-2">
            Inactive
          </Badge>
        );
    }
  };

  const sortableColumn = [
    {
      dataField: "index",
      text: "No",
      sort: true,
    },
    {
      dataField: "login",
      text: "Login",
      sort: true,
    },
    {
      dataField: "district",
      text: "District",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
      formatter: renderStatus,
      sortValue: (cell, row) => cell,
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
    totalSize: props.accounts.length,
  };

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <ChangePassword />
      <Breadcrumb
        routeSegments={[
          { name: "User Management", path: "/user" },
          { name: "Officer Accounts List" },
        ]}
      ></Breadcrumb>
      <SimpleCard title="Officer Accounts List">
        <ToolkitProvider
          striped
          keyField="id"
          data={props.accounts}
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
    accounts: state.accountsList.accounts,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, {
  getAllOfficerAccounts,
  toggleForm,
  setSelectedIndex,
  removeAccount,
  resetError,
  setError,
})(AssignmentTaskList);
