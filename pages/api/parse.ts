// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { download } from "../../utils/onedrive";

type Data = {
  file: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== "POST") return;
  const { url } = req.body;
  const b64 = await download(url);
  res.status(200).json({ file: b64 });
};
