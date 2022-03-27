export const tagFieldsOptions = [
  {
    id: "01",
    title: "Assignment Task Title",
    value: "assignmentTask.title",
  },
  {
    id: "02",
    title: "Exam Type",
    value: "assignmentTask.examType",
  },
  {
    id: "03",
    title: "Exam Period",
    value: "assignmentTask.examPeriod",
  },
  {
    id: "04",
    title: "Assigned Exam Center Name",
    value: "examCenter.name",
  },
  {
    id: "05",
    title: "Assigned School Code",
    value: "examCenter.schoolCode",
  },
  {
    id: "06",
    title: "Assigned Exam Center Code",
    value: "examCenter.examCenterCode",
  },
  {
    id: "07",
    title: "Role",
    value: "role",
  },
  {
    id: "08",
    title: "Invigilator name",
    value: "invigilator.name",
  },
  {
    id: "09",
    title: "Invigilator IC",
    value: "invigilator.ic",
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
        value: "invigilator.name",
      },
      {
        value: "examCenter.name",
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
        value: "invigilator.name",
      },
      {
        value: "examCenter.name",
      },
    ],
  },
];
