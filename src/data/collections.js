const TASKS = [
  {
    id: 1,
    title: "Work on projects",
    priority: 1,
    mission: "Get a Job",
    complete: true,
  },
  {
    id: 2,
    title: "Update resume",
    priority: 2,
    mission: "Get a Job",
    complete: false,
  },
  {
    id: 3,
    title: "Complete takehome assessment",
    priority: 1,
    mission: "Get a Job",
    complete: false,
  },
  {
    id: 4,
    title: "Work on projects",
    priority: 5,
    mission: "Get a Job",
    complete: false,
  },
  {
    id: 6,
    title: "Love yourself",
    priority: 5,
    mission: "Be a better person",
    complete: true,
  },
  {
    id: 7,
    title: "Love somebody else",
    priority: 5,
    mission: "Be a better person",
    complete: true,
  },
  {
    id: 8,
    title: "Dump ex boyfriend",
    priority: 5,
    mission: "Become fierce",
    complete: true,
  },
];

const MISSIONS = [
  {
    id: 1,
    title: "Get a Job",
    priority: 3,
    taskIDs: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: "Be a better person",
    priority: 5,
    taskIDs: [6, 7],
  },
  {
    id: 3,
    title: "Become fierce",
    priority: 5,
    taskIDs: [8],
    complete: true,
  },
];

export { TASKS, MISSIONS };
