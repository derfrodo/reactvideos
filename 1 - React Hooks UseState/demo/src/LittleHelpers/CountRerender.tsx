import React, { useEffect, useRef } from "react";

export const CountRerender: React.FC = ({ children }) => {
  const counter = useRef(0);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <div>
      {children ? `${children} rendered` : "Rendered"} {counter.current} times
    </div>
  );
};
