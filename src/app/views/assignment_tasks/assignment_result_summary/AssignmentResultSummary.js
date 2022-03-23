import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";
import _ from "lodash";
import {
  AssignmentTasks,
  examCenters,
  Invigilators,
  AssignmentResults,
} from "fake-db/static_data/AssignmentTask";
import AssignmentTaskInfoHeader from "../shared/components/AssignmentTaskInfoHeader";
import AssignmentResultTable from "./components/AssignmentResultTable";
import { getStatus } from "app/views/shared/function/getStatus";

const AssignmentResultSummary = () => {
  const role = useParams().role;
  const taskId = useParams().taskId;

  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);
  const result = AssignmentResults.find(
    (result) => result.assignmentTask === taskId && result.role === role
  );
  let resolvedResult;
  if (result) {
    resolvedResult = {
      ...result,
      results: result.results.map((data, index) => {
        const examCenter = examCenters.find(
          (center) => center.id === data.examCenter
        );
        const invigilator = Invigilators.find(
          (invigilator) => invigilator.id === data.invigilator
        );
        return {
          index: index + 1,
          examCenter: examCenter,
          invigilator: invigilator,
        };
      }),
    };
  }

  console.log(resolvedResult);

  let status = getStatus(
    assignmentTask.collectionDate,
    assignmentTask.assignmentDate
  );

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List", path: "/assignment/list" },
          { name: assignmentTask.title, path: `/assignment/${taskId}` },
          { name: "Summary of Assignment Result" },
        ]}
      ></Breadcrumb>
      <SimpleCard>
        <AssignmentTaskInfoHeader
          assignmentTask={assignmentTask}
          status={status}
        />

        <div className="custom-separator"></div>

        <h4>Summary of Assignment Result: {_.startCase(role)}</h4>
        <AssignmentResultTable results={result ? resolvedResult.results : []} />
      </SimpleCard>
    </div>
  );
};

export default AssignmentResultSummary;
