export const tagFieldsOptions = [
  {
    id: "01",
    title: "Assignment Task Title",
    value: "title",
  },
  {
    id: "02",
    title: "Exam Type",
    value: "examType",
  },
  {
    id: "04",
    title: "Assigned Exam Center Name",
    value: "assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.school.schoolName",
  },
  {
    id: "05",
    title: "Assigned School Code",
    value: "assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.school.schoolCode",
  },
  {
    id: "06",
    title: "Assigned Exam Center Code",
    value: "assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.examCenterCode",
  },
  {
    id: "07",
    title: "Role",
    value: "assignmentResults[assignmentResultIndex].role",
  },
  {
    id: "08",
    title: "Invigilator Name",
    value: "assignmentResults[assignmentResultIndex].results[resultIndex].invigilators[invigilatorIndex].teacherName",
  },
  {
    id: "09",
    title: "Invigilator IC",
    value: "assignmentResults[assignmentResultIndex].results[resultIndex].invigilators[invigilatorIndex].icNumber",
  },
];

export const LetterTemplates = [
  {
    id: "01",
    title: "Assignment Letter for Chief Of Invigilator",
    content:
      "<h1>Assignment Letter for Chief Of Invigilator</h1><p><br></p><p>Dear &lt;1&gt;,</p><p class='ql-indent-2'>It is an honour to announce that you are assigned as the Chief of Invigilator for &lt;2&gt;.</p><p><br></p><p>Signature,</p><p>Someone</p>",
    tags: [
      {
        value: "assignmentResults[assignmentResultIndex].results[resultIndex].invigilators[invigilatorIndex].teacherName",
      },
      {
        value: "assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.school.name",
      },
    ],
  },
  {
    id: "02",
    title: "Assignment Letter for Vice Chief of Invigilator",
    content:
      "<h1>Assignment Letter for Vice Chief Of Invigilator</h1><p><br></p><p>Dear &lt;1&gt;,</p><p class='ql-indent-2'>It is an honour to announce that you are assigned as the Chief of Invigilator for &lt;2&gt;.</p><p><br></p><p>Signature,</p><p>Someone</p>",
    tags: [
      {
        value: "assignmentResults[assignmentResultIndex].results[resultIndex].invigilators[invigilatorIndex].teacherName",
      },
      {
        value: "assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.school.name",
      },
    ],
  },
];
