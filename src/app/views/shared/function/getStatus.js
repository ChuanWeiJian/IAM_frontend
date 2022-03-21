import moment from "moment";

export const getStatus = (collectionDate, assignmentDate) => {
  let status;
  let now = moment(new Date(), "DD/MM/YYYY HH:mm");
  let resolvedCollectionDate = moment(collectionDate, "DD/MM/YYYY HH:mm");
  let resolvedAssignmentDate = moment(assignmentDate, "DD/MM/YYYY HH:mm");

  if (resolvedCollectionDate.isSameOrAfter(now)) {
    status = "Collection in progress";
  } else if (resolvedAssignmentDate.isSameOrAfter(now)) {
    status = "Assigning in progress";
  } else {
    status = "Assignment Completed";
  }

  return status;
};
