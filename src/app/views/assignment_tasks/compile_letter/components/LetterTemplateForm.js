import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link, useHistory } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { renderLetterTemplateRadio } from "app/views/shared/form/form";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdRemoveRedEye } from "react-icons/md";
import { validateCompileLetterTemplate as validate } from "app/views/assignment_tasks/shared/validation";
import swal from "sweetalert2";

const LetterTemplatesForm = (props) => {
  const history = useHistory();
  const taskId = props.taskId;

  const letters = props.letters.map((letter, index) => {
    return {
      index: index + 1,
      letter: { id: letter.id, title: letter.title },
      preview: `/letter/${letter.id}`,
    };
  });

  const renderLetterTemplatesForm = (cell, row, rowIndex) => {
    return (
      <Field
        name="letterTemplate"
        label={cell.title}
        radioValue={cell.id}
        component={renderLetterTemplateRadio}
      />
    );
  };

  const renderPreviewButton = (cell, row, rowIndex) => {
    return (
      <div className="d-flex flex-wrap align-items-center">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-top">Preview Letter Content</Tooltip>}
        >
          <Link
            className="p-2 btn-hover rounded-circle"
            to={cell}
            target="_blank"
          >
            <MdRemoveRedEye
              className="cursor-pointer"
              size={24}
            ></MdRemoveRedEye>
          </Link>
        </OverlayTrigger>
      </div>
    );
  };

  const handleFormSubmit = (values) => {
    swal.fire({
      title: "Compiling letters...",
      onBeforeOpen: () => {
        swal.showLoading();
      },
      onOpen: () => {
        //submit form process here remember to async and await with try...catch block
        console.log(values);
        swal.hideLoading();
        swal
          .fire("Success", "Successful compile and sent the letters", "success")
          .then((result) => {
            history.push(`/assignment/${taskId}`);
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    });
  };

  const columns = [
    {
      dataField: "index",
      text: "No",
      sort: true,
    },
    {
      dataField: "letter",
      text: "Letter Template",
      formatter: renderLetterTemplatesForm,
      sort: true,
    },
    {
      dataField: "preview",
      text: "Preview",
      formatter: renderPreviewButton,
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
    totalSize: letters.length,
  };

  return (
    <form onSubmit={props.handleSubmit(handleFormSubmit)}>
      <ToolkitProvider
        striped
        keyField="index"
        data={letters}
        columns={columns}
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
      <div className="row">
        <div className="col-lg-12">
          <button type="submit" className="btn btn-primary m-1 mt-4">
            Compile Letter
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({ form: "CompileLetterForm", validate: validate })(
  LetterTemplatesForm
);
