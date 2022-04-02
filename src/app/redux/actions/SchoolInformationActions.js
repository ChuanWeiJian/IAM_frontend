import { examCenters, Schools } from "fake-db/static_data/ExamCenter";

export const GET_SCHOOL_INFORMATION_BY_ID =
  "SCHOOL-INFORMATION GET_SCHOOL_INFORMATION_BY_ID";

export const getSchoolInformationById = (schoolId) => {
  const school = Schools.find((school) => school.id === schoolId);
  const resolvedExamCenters = school.examCenters.map((centerId, index) => {
    const resolvedExamCenter = examCenters.find(
      (center) => center.id === centerId
    );

    return {
      ...resolvedExamCenter,
      actions: {
        view: "/examcenter/" + centerId,
        edit: "/examcenter/edit/" + centerId,
        delete: "/examcenter/delete/" + centerId,
      },
      index: index + 1,
    };
  });

  const resolvedSchool = {
    ...school,
    examCenters: resolvedExamCenters,
  };

  return {
    type: GET_SCHOOL_INFORMATION_BY_ID,
    payload: resolvedSchool,
  };
};
