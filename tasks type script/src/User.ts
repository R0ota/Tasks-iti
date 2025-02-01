// Given the data, define the interface "User" and use it accordingly.

interface User {
  id: number;
  name: string;
  role: string;
  age?: number;
};

const users: User[] = [
  {
    id: 1,
    name: "Ahmed",
    role: "SUPER_ADMIN",
  },
  {
    id: 2,
    name: "Mohammed",
    age: 32,
    role: "USER",
  },
  {
    id: 3,
    name: "Ali",
    age: 36,
    role: "ADMIN",
  },
];
