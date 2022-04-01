import {
  AssignmentTasks,
  AssignmentResults,
  examCenters,
  Invigilators,
  Schools
} from "fake-db/static_data/AssignmentTask";
import { LetterTemplates } from "fake-db/static_data/LetterTemplate";

export const GET_COMPILE_LETTER_INFO = "COMPILE-LETTER GET_COMPILE_LETTER_INFO";

export const getCompileLetterInfo = (role, taskId) => {
  let counter = 1;
  const assignmentTask = AssignmentTasks.find((task) => task.id === taskId);
  const letterTemplates = LetterTemplates;
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
            index: counter++,
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
      results: newResults,
    };
  }

  return {
    type: GET_COMPILE_LETTER_INFO,
    payload: { assignmentTask, resolvedResult, letterTemplates },
  };
};
