export const checkSchoolCodeUniqueness = (schools, schoolCode) => {
  const school = schools.find((school) => school.schoolCode === schoolCode);
  
  return !school ? true : false;
};
export const checkExamCenterCodeUniqueness = (examCenters, examCenterCode) => {
  const examCenter = examCenters.find((center) => center.examCenterCode === examCenterCode);
  
  return !examCenter ? true : false;
};
