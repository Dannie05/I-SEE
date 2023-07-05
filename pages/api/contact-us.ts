import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseFunctions } from '../../interface';
import SendMail from '../../lib/send-mail';
const { EMAIL } = process.env;
const contact = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    if (method === 'POST') {

        let { name, email, phone, message } = req.body;
        let html = `<div style="background: transparent; background-color: #F1F1F1;"><ul style="margin: 0; list-style: none;"><li>Name:  ${name}</li><li>Email:  ${email}</li><li>Phone:  ${phone}</li><li>Message:  ${message}</li></ul></div>`
        let sent;
        try {
            // sent = await SendMail(EMAIL, "Contact Form", "Respondent from contact form", html)
        } catch (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json(sent);
    } else return res.status(400).json({ error: "No Response for This Request" });
};
export default contact;