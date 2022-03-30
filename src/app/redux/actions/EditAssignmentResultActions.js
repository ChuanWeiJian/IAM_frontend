import {
  AssignmentTasks,
  examCenters,
  Invigilators,
  AssignmentResults,
} from "fake-db/static_data/AssignmentTask";
export const INITIALIZE_ASSIGNMENT_RESULT_FORM =
  "EDIT-ASSIGNMENT-RESULT INITIALIZE_ASSIGNMENT_RESULT_FORM";

export const initializeForm = (role, taskId) => {
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);
  const assignmentResult = AssignmentResults.find(
    (result) => result.assignmentTask === taskId && result.role === role
  );

  let resolvedResult;
  let involvedInvigilators = [];
  if (assignmentResult) {
    resolvedResult = {
      ...assignmentResult,
      results: assignmentResult.results.map((data) => {
        const examCenter = examCenters.find(
          (center) => center.id === data.examCenter
        );
        const invigilators = data.invigilators.map((invigilatorId) =>
          Invigilators.find((invigilator) => invigilator.id === invigilatorId)
        );

        involvedInvigilators = [...involvedInvigilators, ...invigilators];

        return {
          examCenter: examCenter,
          invigilators: invigilators,
        };
      }),
    };

    involvedInvigilators.sort((a, b) => {
      if (a.examCenterCode > b.examCenterCode) {
        return 1;
      } else if (a.examCenterCode < b.examCenterCode) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  
  return {
    type: INITIALIZE_ASSIGNMENT_RESULT_FORM,
    payload: { assignmentTask, resolvedResult, involvedInvigilators },
  };
};
