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
        type: "link"
      },
      {
        icon: "i-Clock-4",
        name: "Version 2",
        path: "/dashboard/v2",
        type: "link"
      }
    ]
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
        type: "link"
      }
    ]
  },
  {
    name: "Exam Center",
    description: "Management of exam centers",
    type: "dropDown",
    icon: "i-University1",
    sub: [
      {
        icon: "i-University",
        name: "New Exam Center",
        path: "/examcenter/new",
        type: "link"
      }
    ]
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
        type: "link"
      }
    ]
  },
];