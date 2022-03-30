import moment from "moment";

export const getStatus = (assignmentTask) => {
  let status;
  let now = moment(new Date(), "DD/MM/YYYY HH:mm");
  let resolvedCollectionDate = moment(
    assignmentTask.collectionDate,
    "DD/MM/YYYY HH:mm"
  );
  let resolvedAssignmentDate = moment(
    assignmentTask.assignmentDate,
    "DD/MM/YYYY HH:mm"
  );

  if (resolvedCollectionDate.isSameOrAfter(now)) {
    status = "Collection in progress";
  } else if (
    resolvedAssignmentDate.isSameOrAfter(now) &&
    (!assignmentTask.chiefInvigilatorComplete ||
      !assignmentTask.viceChiefInvigilatorComplete ||
      !assignmentTask.invigilatorComplete ||
      !assignmentTask.environmentalSupervisorComplete ||
      !assignmentTask.roomKeeperComplete ||
      !assignmentTask.reservedInvigilatorComplete)
  ) {
    status = "Assigning in progress";
  } else {
    status = "Assignment Completed";
  }

  return status;
};
