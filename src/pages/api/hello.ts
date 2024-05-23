// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  setTimeout(() => {
    const newLocal = { name: "John Doe" };
    console.log(newLocal);
    res.status(200).json(newLocal);
  }, 5000);
}
