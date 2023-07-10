import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseFunctions } from '../../interface';
// import referers from '../../lib/referals';
const getReferers = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'POST') {
        let ref = req.body.message;
        // let arr = await referers("63d3b705d01c0ae1851372bc");
        // res.status(200).json(arr);
    } else return res.status(400).json({ error: "No Response for This Request" });
};
export default getReferers;