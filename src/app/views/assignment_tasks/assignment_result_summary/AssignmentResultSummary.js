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
import AssignmentResultTable from "../shared/components/AssignmentResultTable";
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
    let newResults = [];
    result.results.forEach((data) => {
      const examCenter = examCenters.find(
        (center) => center.id === data.examCenter
      );

      console.log(data.invigilators);
      data.invigilators.forEach((invigilatorId) => {
        newResults = [
          ...newResults,
          {
            examCenter: examCenter,
            invigilator: Invigilators.find(
              (invigilator) => invigilator.id === invigilatorId
            ),
          },
        ];
      });
    });

    resolvedResult = {
      ...result,
      results: newResults.map((newResult, index) => {
        return { index: index + 1, ...newResult };
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
