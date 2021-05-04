import React from "react";
import { StateAsCounter } from "./StateHookScenarios/StateAsCounter";
import { StateAsProperty } from "./StateHookScenarios/StateAsProperty";

export const StateHook: React.FC = () => {
  return (
    <>
      <h2>useState</h2>
      <StateAsCounter />
      <StateAsProperty />
    </>
  );
};
