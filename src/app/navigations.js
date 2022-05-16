export const navigations = [
  {
    name: "Dashboard",
    description: "Dashboard",
    type: "dropDown",
    icon: "i-Bar-Chart",
    sub: [
      {
        icon: "i-Clock-3",
        name: "Dashboard",
        path: "/",
        type: "link",
      },
    ],
  },
  {
    name: "User Management",
    description: "Management of officer accounts",
    type: "dropDown",
    icon: "i-Business-Mens",
    userGroup: "Admin",
    sub: [
      {
        icon: "i-Add-User",
        name: "New Officer Account",
        path: "/user/new",
        type: "link",
      },
      {
        icon: "i-Administrator",
        name: "Officer Accounts List",
        path: "/user/list",
        type: "link",
      },
    ],
  },
  {
    name: "Assignment Tasks",
    description: "Management of assignment tasks",
    type: "dropDown",
    icon: "i-File",
    userGroup: "Officer",
    sub: [
      {
        icon: "i-Add-File",
        name: "New Assignment Task",
        path: "/assignment/new",
        type: "link",
      },
      {
        icon: "i-File-Horizontal-Text",
        name: "Assignment Tasks List",
        path: "/assignment/list",
        type: "link",
      },
    ],
  },
  {
    name: "Assignment Results",
    description: "View result of assignment",
    type: "link",
    icon: "i-File",
    path: "/assignment/result/invigilator",
    userGroup: "Teacher",
  },
  {
    name: "School & Exam Center",
    description: "Management of schools & exam centers",
    type: "dropDown",
    icon: "i-University1",
    userGroup: "Officer",
    sub: [
      {
        icon: "i-University",
        name: "New School",
        path: "/school/new",
        type: "link",
      },
      {
        icon: "i-University1",
        name: "Registered Schools List",
        path: "/school/list",
        type: "link",
      },
    ],
  },
  {
    name: "Formal Letter",
    description: "Management of formal letters",
    type: "dropDown",
    icon: "i-Mail",
    userGroup: "Officer",
    sub: [
      {
        icon: "i-Mail-Add-",
        name: "New Formal Letter",
        path: "/letter/new",
        type: "link",
      },
      {
        icon: "i-Email",
        name: "Formal Letter List",
        path: "/letter/list",
        type: "link",
      },
    ],
  },
];
