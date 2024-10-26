export const departmentsArray = [
  //sample date for initial departments
    {
      name: "CEO",
      id: 101,
      child: [
        {
          id: 201,
          name: "Department #1",
          child: [
            {
              id: 301,
              name: "Backend",
              child: [
                { id: 401, name: "Person A" },
                { id: 402, name: "Person B" },
              ],
            },
            {
              id: 302,
              name: "Frontend",
              child: [
                { id: 401, name: "Person A" },
                { id: 402, name: "Person B" },
                { id: 403, name: "Person C" },
              ],
            },
          ],
        },
        {
          id: 202,
          name: "Department #2",
          child: [
            {
              id: 303,
              name: "Backend",
              child: [
                { id: 401, name: "Person A" },
              ],
            },
            {
              id: 304,
              name: "Frontend",
              child: [
                { id: 401, name: "Person A" },
                { id: 402, name: "Person B" },
                { id: 403, name: "Person C" },
                { id: 403, name: "Person D" },
              ],
            },
          ],
        },
      ],
    },
  ];
  const a = {
    id: 1,
    name: '',
    child: []
  }
