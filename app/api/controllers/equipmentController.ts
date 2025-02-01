import { NextApiRequest, NextApiResponse } from 'next';

export const requestEquipment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { equipment, quantity, project } = req.body;
  if (!equipment || !quantity || !project) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  return res.status(200).json({ message: 'Request received' });
};

export const approveRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { requestId } = req.body;
  if (!requestId) {
    return res.status(400).json({ message: 'Request ID is required' });
  }
  return res.status(200).json({ message: 'Request approved and logged' });
};

export const getEquipmentLogs = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json([]);
};
