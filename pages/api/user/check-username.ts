import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interface';
const check = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'GET') {

        const { username } = req.query;
        const { User } = await dbCon();
        try {
            const user = await User.findOne({ username: username });
            if (user != null) {
                res.status(200).json({ isValid: false });
            } else {
                res.status(200).json({ isValid: true });
            }
        } catch (e) {
            res.status(404).json({ isValid: null });
        }
    } else res.status(400).json({ isValid: null });
};
export default check;