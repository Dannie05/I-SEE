import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseFunctions } from '../../interface';
import { dbCon } from '../../models';
const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'POST') {
        const { email, password } = req.body;
        const { User } = await dbCon();
        const user = await User.findOne({
            email: email, password: password
        });
        res.status(200).json(user);
    } else return res.status(400).json({ error: "No Response for This Request" });
};
export default login;