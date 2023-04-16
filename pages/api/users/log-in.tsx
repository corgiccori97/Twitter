import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/client/client";
import withHandler from '../../../lib/server/withHandler';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {phone, password} = req.body;
    let user;
    if (phone) {
        user = await client.user.findUnique({
            where: {
                phone,
            },
        });
        if (user) console.log("find out!");
        else {
            console.log("Did not find. Will create.");
            user = await client.user.create({
                data: {
                    username:phone,
                    password,
                },
            });
        }
        console.log(user);

    }
    console.log(req.body);
    return res.status(200).end();
}

export default withHandler("POST", handler);