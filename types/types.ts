// types/types.ts
export interface LogEntry {
    id: string;
    equipment: string;
    quantity: number;
    engineer: string;
    project: string;
    date: string; // or Date if you're using Date objects
  }
  
  export interface RequestEntry {
    id: string;
    equipment: string;
    quantity: number;
    project: string;
  }