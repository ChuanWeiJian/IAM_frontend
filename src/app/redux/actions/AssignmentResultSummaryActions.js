import {
  AssignmentTasks,
  examCenters,
  Invigilators,
  AssignmentResults,
  Schools
} from "fake-db/static_data/AssignmentTask";

export const GET_ASSIGNMENT_RESULT_SUMMARY_INFO =
  "ASSIGNMENT-RESULT-SUMMARY GET_ASSIGNMENT_RESULT_SUMMARY_INFO";

export const getAssignmentResultSummary = (role, taskId) => {
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);
  //get assignment result by assignment task id and role with all resolved (the assignment task will be resolved as well)
  //resolve result into array
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

      const resolvedExamCenter = {...examCenter, school: Schools.find((school) => school.id === examCenter.school)};

      data.invigilators.forEach((invigilatorId) => {
        newResults = [
          ...newResults,
          {
            examCenter: resolvedExamCenter,
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

  return {
    type: GET_ASSIGNMENT_RESULT_SUMMARY_INFO,
    payload: { assignmentTask, resolvedResult},
  };
};
