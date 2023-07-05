import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interface';
const create = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'GET') {
        const data = {
            name: "platinum",
            amount: 50000,
            welcome_bonus: 10000,
            point_value: 200
        };
        const { Accounts } = await dbCon();
        let account;
        try {
            account = new Accounts(data);
            await account.save();
        } catch (err) {
            account = {
                message: "error",
            }
        }
        res.status(200).json({ account });
    } else res.status(400).json({ error: `No Response for This ${req.method} Request` });
};
export default create;