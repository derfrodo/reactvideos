import React, { useState } from "react";

export const StateHook: React.FC = () => {
  const [waveCount, setWaveCount] = useState<number>(0);
  return (
    <>
      <p>Hallo lieber Zuschauer</p>
      <div>
        <button
          onClick={() => {
            setWaveCount((previous) => previous + 1);
            console.log(waveCount);
          }}
        >
          👋
        </button>
      </div>
      <p>Du hast schon {waveCount} mal gewunken.</p>
    </>
  );
};
