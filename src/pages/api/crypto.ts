import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${req.query.symbol}&tsyms=USD,EUR,CNY,JPY,GBP`)
    .then((res) => res.json())
    .then(res.json);
}
