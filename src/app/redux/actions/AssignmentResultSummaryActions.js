import {
  AssignmentTasks,
  examCenters,
  Invigilators,
  AssignmentResults,
} from "fake-db/static_data/AssignmentTask";
import { getStatus } from "app/views/shared/function/getStatus";

export const GET_ASSIGNMENT_RESULT_SUMMARY_INFO =
  "ASSIGNMENT-RESULT-SUMMARY GET_ASSIGNMENT_RESULT_SUMMARY_INFO";

export const getAssignmentResultSummary = (role, taskId) => {
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

  const status = getStatus(assignmentTask);

  return {
    type: GET_ASSIGNMENT_RESULT_SUMMARY_INFO,
    payload: { assignmentTask, resolvedResult, status },
  };
};
