import { NextApiRequest, NextApiResponse } from 'next';
import { getServerAuthSession } from './auth/[...nextauth]';

export default async function handler(req, res) {
    const session= await getServerAuthSession(req,res);
    if (!session) {
        res.status(401).json({ text: 'unauthorised' });
    }
    res.status(200).json({ text: 'Hello' });
};