import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: "Gabriel" },
    { id: 2, name: "Lucas" },
    { id: 3, name: "Bruno" },
  ];

  return res.json(users);
};
