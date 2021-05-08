import React, { useState } from "react";
import { CountRerender } from "../LittleHelpers/CountRerender";

export const StateAsCounter: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h3>Simple Counter.</h3>
      <div>
        Current Count: {count}
        <div>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
      <div>
        <h4>Using value of state at the moment of being rendered.</h4>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
          }}
        >
          Increment twice
        </button>
      </div>
      <div style={{ marginTop: 32 }}>
        <h4>Using value of state at the moment of being updated.</h4>
        <button onClick={() => setCount((p) => p + 1)}>Increment</button>
        <button
          onClick={() => {
            setCount((p) => p + 1);
            setCount((p) => p + 1);
          }}
        >
          Increment twice
        </button>
      </div>
      <CountRerender>Counter</CountRerender>
    </div>
  );
};
