import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../models';
import { ResponseFunctions } from './../../interface';
const create = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'POST') {
        const data = req.body;
        if (data.password === data.re_password) {
            const { User } = await dbCon();
            // let referer, ref_id: string;
            // try {
            //     referer = await User.findOne({ username: data.referer });
            //     ref_id = referer._id;
            // } catch (err) {
            //     if (err) ref_id = "company";
            // }
            let user;
            let error: string;
            try {
                user = new User({
                    email: data.email,
                    firstName: data.first_name,
                    lastName:data.last_name,
                    password: data.password,
                    balance: 0,
                    username: data.username||"",
                    phone: data.phone,
                    country:data.country,
                    address:data.address,

                    // referer: ref_id,
                });
                await user.save();
                error = `User ${user.username} created successfully`
                // referer.referals.push(`${user._id}`)
                // await referer.save();
            } catch (err) {
                user = null;
                error = 'User creation Failed due to' + err.message
            }

            res.status(200).json({ user, error });

        } else {
            res.status(200).json({ user: null, error: 'Passwords did not match' });
        }
    } else res.status(400).json({ user: null, error: `No Response for This ${req.method} Request` });
};
export default create;