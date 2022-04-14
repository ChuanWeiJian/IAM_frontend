import React from "react";

const styles = {
  position: "fixed",
  left: 0,
  right: 0,
  top: "calc(50% - 20px)",
  margin: "auto",
  height: "40px",
  width: "40px",
  zIndex: 324324324,
};

const loaderOverlay = {
  position: "fixed",
  left: 0,
  top: 0,
  height: "100%",
  width: "100%",
  zIndex: 324324323,
  backgroundColor: "white",
};

const Loader = () => {
  return (
    <div style={loaderOverlay}>
      <div style={styles}>
        <div className="spinner spinner-bubble spinner-bubble-primary"></div>
      </div>
    </div>
  );
};

export default Loader;
