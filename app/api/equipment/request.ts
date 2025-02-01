import { requestEquipment } from '../../api/controllers/equipmentController';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await requestEquipment(req, res);
  }
  return res.status(405).json({ message: 'Method Not Allowed' });
}
