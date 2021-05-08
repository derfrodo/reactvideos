import React, { useState } from "react";
import { CountRerender } from "../LittleHelpers/CountRerender";

export const StateAsPropertyMemorized: React.FC<{}> = () => {
  const [value, setValue] = useState<string>("unset");

  return (
    <div>
      <h3>State as Property with memorizing Consumption</h3>
      <CountRerender>ComponentwithState</CountRerender>
      <div>
        <h4>Memorized Consumer and Updater</h4>
        <MemorizedConsumingComponent value={value} />
        <MemorizedUpdatingComponent setValue={setValue} />
      </div>
    </div>
  );
};

const ConsumingComponent: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div>
      <div>The current value is: {value}</div>
      <CountRerender>Value Component</CountRerender>
    </div>
  );
};

const UpdatingComponent: React.FC<{
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setValue }) => {
  return (
    <div>
      <button
        onClick={() => {
          setValue((p) => (p === "Value1" ? "Value2" : "Value1"));
        }}
      >
        ToggleValue
      </button>
      <CountRerender>Toggle Component</CountRerender>
    </div>
  );
};

const MemorizedConsumingComponent = React.memo(ConsumingComponent);
const MemorizedUpdatingComponent = React.memo(UpdatingComponent);
