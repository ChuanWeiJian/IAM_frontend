import React from "react";
import SweetAlert from "sweetalert2-react";

const ErrorModal = (props) => {
  return (
    <SweetAlert
      show={!!props.error}
      title="An Error Occured"
      type="error"
      text={
        props.error
          ? props.error.response
            ? props.error.response.data.message
            : props.error.message
          : ""
      }
      onConfirm={() => props.onConfirm()}
    />
  );
};

export default ErrorModal;
