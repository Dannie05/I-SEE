import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interface';
const find = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'GET') {
        const { User } = await dbCon();
        let user;
        try {
            user = await User.findOne({
                email: req.query.user
            });
        } catch (err) {
            return res.status(400).json({ error: "Did not find user because: " + err.message })
        }
        return res.status(200).json(user);
    } else return res.status(400).json({ error: "No Response for This Request" });
};
export default find;