// components/ManagerInterface.tsx
import React, { useEffect, useState } from 'react';
import { RequestEntry } from '../types/types'; // Adjust the import path if necessary

const ManagerInterface: React.FC = () => {
  const [requests, setRequests] = useState<RequestEntry[]>([]);

  useEffect(() => {
    // Fetch pending requests from backend
    fetch('/api/equipment/requests')
      .then((response) => response.json())
      .then((data: RequestEntry[]) => setRequests(data));
  }, []);

  const handleApprove = async (requestId: string) => {
    // Send approval to backend
    await fetch('/api/equipment/approve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ requestId }),
    });
  };

  return (
    <div>
      <h2>Pending Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {request.equipment} (x{request.quantity}) for {request.project}
            <button onClick={() => handleApprove(request.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerInterface;