// pages/api/equipment/logs.ts
import { getEquipmentLogs } from '../../api/controllers/equipmentController';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return await getEquipmentLogs(req, res);
  }
  return res.status(405).json({ message: 'Method Not Allowed' });
}
