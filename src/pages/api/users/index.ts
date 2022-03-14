import { NextApiRequest, NextApiResponse } from "next";

// JWT (Storage)
// Next Auth (Login Social)
// Cognito, Auth0 (Providers externos)

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: "Gabriel" },
    { id: 2, name: "Lucas" },
    { id: 3, name: "Bruno" },
    { id: 4, name: "Luiz" },
    { id: 5, name: "Paulo" },
    { id: 6, name: "Silvio" },
  ];

  return res.json(users);
};
