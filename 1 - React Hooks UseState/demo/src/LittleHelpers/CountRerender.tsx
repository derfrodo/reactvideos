import React, { useEffect, useRef } from "react";

export const CountRerender: React.FC = ({ children }) => {
  const counter = useRef(1);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <div style={{ fontSize: "smaller" }}>
      <em>
        {children ? `${children} rendered` : "Rendered"} {counter.current} times
      </em>
    </div>
  );
};
