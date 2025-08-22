import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border">
      {children}
    </div>
  );
};