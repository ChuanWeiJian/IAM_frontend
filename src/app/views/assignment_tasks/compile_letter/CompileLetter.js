import React from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import _ from "lodash";
import {
  AssignmentTasks,
  AssignmentResults,
  examCenters,
  Invigilators,
} from "fake-db/static_data/AssignmentTask";
import { LetterTemplates } from "fake-db/static_data/LetterTemplate";
import LetterTemplateForm from "./components/LetterTemplateForm";
import AssignmentResultTable from "../shared/components/AssignmentResultTable";

const CompileLetter = () => {
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

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Assignment Tasks", path: "/assignment" },
          { name: "Assignment Tasks List", path: "/assignment/list" },
          { name: assignmentTask.title, path: `/assignment/${taskId}` },
          { name: "Compile Letter" },
        ]}
      ></Breadcrumb>
      <SimpleCard
        title="Letter Template"
        subtitle="Please select the letter template"
      >
        <LetterTemplateForm letters={LetterTemplates} />

        <div className="custom-separator"></div>

        <h4>Summary of Assignment Result: {_.startCase(role)}</h4>
        <AssignmentResultTable results={result ? resolvedResult.results : []} />
      </SimpleCard>
    </div>
  );
};

export default CompileLetter;
