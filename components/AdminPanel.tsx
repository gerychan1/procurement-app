// components/AdminPanel.tsx
import React, { useEffect, useState } from 'react';
import { LogEntry } from '../types/types'; // Adjust the import path if necessary

const AdminPanel: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    // Fetch logs from backend
    fetch('/api/equipment/logs')
      .then((response) => response.json())
      .then((data: LogEntry[]) => setLogs(data));
  }, []);

  return (
    <div>
      <h2>Equipment Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.equipment} (x{log.quantity}) taken by {log.engineer} for {log.project} on {log.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;