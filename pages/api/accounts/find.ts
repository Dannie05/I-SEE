import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interface';
const create = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'POST') {
        const { Accounts } = await dbCon();
        let accounts;
        try {
            accounts = await Accounts.find();
        } catch (err) {
            accounts = {
                message: "error",
            }
        }
        
        res.status(200).json( accounts );
    } else res.status(400).json({ error: `No Response for This ${req.method} Request` });
};
export default create;