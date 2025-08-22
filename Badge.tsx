import React from "react";

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="inline-block px-2 py-1 text-xs bg-gray-200 rounded-full">
      {children}
    </span>
  );
};