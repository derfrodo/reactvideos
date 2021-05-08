import React, { useState } from "react";
import { StateAsCounter } from "./StateAsCounter";
import { StateAsProperty } from "./StateAsProperty";
import { StateAsPropertyMemorized } from "./StateAsPropertyMemorized";

enum Examples {
  NONE = "none",
  COUNTER = "Counter",
  PROPERTY = "Property",
  MEMORIZING = "Memorizing Components",
}

export const StateScenarios: React.FC = () => {
  const [example, setExample] = useState<Examples>(Examples.NONE);

  return (
    <>
      <h2>What about "useState"</h2>
      <select
        value={example}
        onChange={(e) => setExample(e.target.value as Examples)}
      >
        {Object.values(Examples).map((o) => (
          <option value={o} disabled={o === Examples.NONE}>
            {o}
          </option>
        ))}
      </select>
      {example === Examples.COUNTER && <StateAsCounter />}
      {example === Examples.PROPERTY && <StateAsProperty />}
      {example === Examples.MEMORIZING && <StateAsPropertyMemorized />}
    </>
  );
};
