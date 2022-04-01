export const examCenters = [
  {
    id: "01",
    examCenterCode: "JC005",
    school: "01",
    assignmentTasks: ["01", "02", "03"],
  },
  {
    id: "02",
    examCenterCode: "JC017",
    school: "02",
    assignmentTasks: ["01", "02", "03"],
  },
  {
    id: "03",
    examCenterCode: "JC013",
    school: "03",
    assignmentTasks: ["01", "02", "03"],
  },
];

export const Schools = [
  {
    id: "01",
    name: "SMK Tinggi Kluang",
    schoolCode: "JEB2037",
    examCenters: ["01"],
    address: "xxxx, Jalan XXX, 81000, XXX, Johor",
    examSecretary: "01",
  },
  {
    id: "02",
    name: "SMK Tengku Aris Bendahara",
    schoolCode: "JEB2038",
    examCenters: ["02"],
    address: "xxxx, Jalan XXX, 81000, XXX, Johor",
    examSecretary: "02",
  },
  {
    id: "03",
    name: "SMK Sultan Abdul Jalil",
    schoolCode: "JEA2033",
    examCenters: ["03"],
    address: "xxxx, Jalan XXX, 81000, XXX, Johor",
    examSecretary: "03",
  },
];

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
    collectionStatus: [
      { examCenter: "01", status: 2 },
      { examCenter: "02", status: 2 },
      { examCenter: "03", status: 2 },
    ],
    chiefInvigilatorComplete: true,
    viceChiefInvigilatorComplete: true,
    invigilatorComplete: true,
    environmentalSupervisorComplete: true,
    roomKeeperComplete: true,
    reservedInvigilatorComplete: true,
    assignmentResults: ["01", "02", "03", "04", "05", "06"],
  },
  {
    id: "02",
    title: "STPM 2022",
    examType: "STPM",
    createdDate: "20/03/2022 17:16",
    collectionDate: "20/04/2022 00:00",
    assignmentDate: "30/04/2022 00:00",
    examCenters: ["01", "02", "03"],
    examCenterData: [],
    collectionStatus: [
      { examCenter: "01", status: 0 },
      { examCenter: "02", status: 0 },
      { examCenter: "03", status: 0 },
    ],
    chiefInvigilatorComplete: false,
    viceChiefInvigilatorComplete: false,
    invigilatorComplete: false,
    environmentalSupervisorComplete: false,
    roomKeeperComplete: false,
    reservedInvigilatorComplete: false,
    assignmentResults: [],
  },
  {
    id: "03",
    title: "SPM 2022",
    examType: "SPM",
    createdDate: "18/03/2022 17:16",
    collectionDate: "19/03/2022 00:00",
    assignmentDate: "30/04/2022 00:00",
    examCenters: ["01", "02", "03"],
    examCenterData: ["04", "05", "06"],
    collectionStatus: [
      { examCenter: "01", status: 2 },
      { examCenter: "02", status: 2 },
      { examCenter: "03", status: 2 },
    ],
    chiefInvigilatorComplete: true,
    viceChiefInvigilatorComplete: false,
    invigilatorComplete: true,
    environmentalSupervisorComplete: false,
    roomKeeperComplete: false,
    reservedInvigilatorComplete: false,
    assignmentResults: ["07", "08"],
  },
];

export const examSecretaries = [
  {
    id: "01",
    school: "01",
    username: "sec01",
    password: "123456",
  },
  {
    id: "02",
    school: "02",
    username: "sec02",
    password: "123456",
  },
  {
    id: "03",
    school: "03",
    username: "sec03",
    password: "123456",
  },
  {
    id: "04",
    school: "04",
    username: "sec04",
    password: "123456",
  },
];
