// File: pages/api/users/[id].ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    // Fetch user data by ID
    const user = getUserById(id as string);
    res.status(200).json(user);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
