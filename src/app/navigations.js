export const navigations = [
  {
    name: "Dashboard",
    description: "Dashboard",
    type: "dropDown",
    icon: "i-Bar-Chart",
    sub: [
      {
        icon: "i-Clock-3",
        name: "Version 1",
        path: "/dashboard/v1",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "Version 2",
        path: "/dashboard/v2",
        type: "link",
      },
    ],
  },
  {
    name: "Assignment Tasks",
    description: "Management of assignment tasks",
    type: "dropDown",
    icon: "i-File",
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
    name: "School & Exam Center",
    description: "Management of schools & exam centers",
    type: "dropDown",
    icon: "i-University1",
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
