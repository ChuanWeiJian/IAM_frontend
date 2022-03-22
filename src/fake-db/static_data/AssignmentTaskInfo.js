export const AssignmentTasks = [
  {
    id: "01",
    title: "SPM 2020",
    examType: "SPM",
    createdDate: "20/03/2020 17:16",
    collectionDate: "21/03/2020 00:00",
    assignmentDate: "22/03/2020 00:00",
    examCenters: ["01", "02", "03"],
    examCenterData: ["01", "02", "03"],
    chiefInvigilatorComplete: true,
    viceChiefInvigilatorComplete: true,
    invigilatorComplete: true,
    environmentalSupervisorComplete: true,
    roomKeeperComplete: true,
    reservedInvigilatorComplete: true,
  },
  {
    id: "02",
    title: "STPM 2022",
    examType: "STPM",
    createdDate: "20/03/2022 17:16",
    collectionDate: "22/03/2022 00:00",
    assignmentDate: "31/03/2022 00:00",
    examCenters: ["01", "02", "03"],
    examCenterData: ["07", "08", "09"],
    chiefInvigilatorComplete: false,
    viceChiefInvigilatorComplete: false,
    invigilatorComplete: false,
    environmentalSupervisorComplete: false,
    roomKeeperComplete: false,
    reservedInvigilatorComplete: false,
  },
  {
    id: "03",
    title: "SPM 2022",
    examType: "SPM",
    createdDate: "18/03/2022 17:16",
    collectionDate: "19/03/2022 00:00",
    assignmentDate: "31/03/2022 00:00",
    examCenters: ["01", "02", "03"],
    examCenterData: ["04", "05", "06"],
    chiefInvigilatorComplete: true,
    viceChiefInvigilatorComplete: false,
    invigilatorComplete: false,
    environmentalSupervisorComplete: false,
    roomKeeperComplete: false,
    reservedInvigilatorComplete: false,
  },
];

export const examCenters = [
  {
    id: "01",
    name: "SMK Tinggi Kluang",
    schoolCode: "JEB2037",
    examCenterCode: "JC005",
  },
  {
    id: "02",
    name: "SMK Tengku Aris Bendahara",
    schoolCode: "JEB2038",
    examCenterCode: "JC017",
  },
  {
    id: "03",
    name: "SMK Sultan Abdul Jalil",
    schoolCode: "JEA2033",
    examCenterCode: "JC013",
  },
];

export const examCenterData = [
  {
    id: "01",
    examCenter: "01",
    assignmentTaskId: "01",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 1,
    numberOfInvigilatorRequired: 10,
    numberOfReservedInvigilatorRequired: 2,
  },
  {
    id: "02",
    examCenter: "02",
    assignmentTaskId: "01",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 2,
    numberOfInvigilatorRequired: 15,
    numberOfReservedInvigilatorRequired: 2,
  },
  {
    id: "03",
    examCenter: "03",
    assignmentTaskId: "01",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 1,
    numberOfInvigilatorRequired: 8,
    numberOfReservedInvigilatorRequired: 1,
  },
  {
    id: "04",
    examCenter: "01",
    assignmentTaskId: "03",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 1,
    numberOfInvigilatorRequired: 8,
    numberOfReservedInvigilatorRequired: 1,
  },
  {
    id: "05",
    examCenter: "02",
    assignmentTaskId: "03",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 1,
    numberOfInvigilatorRequired: 8,
    numberOfReservedInvigilatorRequired: 1,
  },
  {
    id: "06",
    examCenter: "03",
    assignmentTaskId: "03",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 1,
    numberOfInvigilatorRequired: 8,
    numberOfReservedInvigilatorRequired: 1,
  },
  {
    id: "07",
    examCenter: "01",
    assignmentTaskId: "02",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 1,
    numberOfInvigilatorRequired: 8,
    numberOfReservedInvigilatorRequired: 1,
  },
  {
    id: "08",
    examCenter: "02",
    assignmentTaskId: "02",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 1,
    numberOfInvigilatorRequired: 8,
    numberOfReservedInvigilatorRequired: 1,
  },
  {
    id: "09",
    examCenter: "03",
    assignmentTaskId: "02",
    numberOfChiefInvigilatorRequired: 1,
    numberOfViceChiefInvigilatorRequired: 1,
    numberOfEnvironmentalSupervisorRequired: 1,
    numberOfRoomKeeperRequired: 1,
    numberOfInvigilatorRequired: 8,
    numberOfReservedInvigilatorRequired: 1,
  },
];
