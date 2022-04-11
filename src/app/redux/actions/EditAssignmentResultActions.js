import {
  AssignmentTasks,
  examCenters,
  Invigilators,
  AssignmentResults,
  Schools,
} from "fake-db/static_data/AssignmentTask";
export const INITIALIZE_ASSIGNMENT_RESULT_FORM =
  "EDIT-ASSIGNMENT-RESULT INITIALIZE_ASSIGNMENT_RESULT_FORM";

export const initializeForm = (role, taskId) => {
  //get assignment task by id and district
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);
  //get assignment result by task id and role with all fields resolved
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

        const resolvedExamCenter = {
          ...examCenter,
          school: Schools.find((school) => school.id === examCenter.school),
        };

        const invigilators = data.invigilators.map((invigilatorId) => {
          const invigilator = Invigilators.find(
            (invigilator) => invigilator.id === invigilatorId
          );
          return {
            ...invigilator,
            schoolId: Schools.find(
              (school) => school.id === invigilator.schoolId
            ),
          };
        });

        involvedInvigilators = [...involvedInvigilators, ...invigilators];

        return {
          examCenter: resolvedExamCenter,
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
