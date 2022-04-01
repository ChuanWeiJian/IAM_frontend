export const checkSchoolCodeUniqueness = (schools, schoolCode) => {
  const school = schools.find((school) => school.schoolCode === schoolCode);
  
  return !school ? true : false;
};
