// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // ki
  const env = process.env.NODE_ENV;

  const myName = process.env.NAME;


  if (env == "development") {
    // capcha hide
  } else if (env == "production") {
    // capcha show
  }

  res.status(200).json({ env, myName });


}
