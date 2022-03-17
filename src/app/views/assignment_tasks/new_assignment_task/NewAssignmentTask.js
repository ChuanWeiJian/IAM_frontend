import React from "react";
import { Breadcrumb } from "@gull";

const NewAssignmentTask = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "New Assignment Tasks" },
        ]}
      ></Breadcrumb>
      <div className="row">
        <p>New Assignment Task</p>
      </div>
    </div>
  );
};

export default NewAssignmentTask;
