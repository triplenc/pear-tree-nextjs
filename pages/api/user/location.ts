import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.headers.authorization) {
    res.status(403).json({});
    return;
  }
  res.status(200).json({
    latitude: 37.5477546,
    longitude: 126.922385,
    시군구: "마포구",
    시도: "서울시",
    읍면동: "상수동",
  });
}
