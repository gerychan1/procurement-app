// components/RequestForm.tsx
import React, { useState } from 'react';

const RequestForm: React.FC = () => {
  const [equipment, setEquipment] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [project, setProject] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Send request to backend
    await fetch('/api/equipment/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ equipment, quantity, project }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Equipment:
        <input type="text" value={equipment} onChange={(e) => setEquipment(e.target.value)} required />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
      </label>
      <label>
        Project:
        <input type="text" value={project} onChange={(e) => setProject(e.target.value)} required />
      </label>
      <button type="submit">Request Equipment</button>
      <button></button>
    </form>
  );
};

export default RequestForm;