import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interface';
import referers from '../../../lib/referals'
import ref_reward from '../../../lib/referal_reward'
const check = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'POST') {
        const data = req.body;
        const { User } = await dbCon();
        try {
            const user = await User.findOne({ _id: data.owner._id });
            if (user != null) {
                user.account_type = data.name;
                user.balance = data.welcome_bonus;
                user.cummulative_pv = data.point_value;
                user.current_month_pv = data.point_value;
                await user.save();
                let ref_chain = await referers(data.owner._id as string);
                let reward = data.welcome_bonus;
                let pv = data.point_value;
                for (let i = 0; i < ref_chain.length; i++) {
                   await ref_reward(ref_chain[i], reward, pv);
                    reward /= 2;
                    pv /= 2
                }
                res.status(200).json(user);
            } else {
                res.status(200).json(user);
            }
        } catch (e) {
            res.status(404).json(null);
        }
    } else res.status(400).json(null);
};
export default check;