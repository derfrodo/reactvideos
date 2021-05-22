import React from "react";

export const HookDemo: React.FC = () => {
  return (
    <>
      <p>Hallo lieber Zuschauer 👋</p>
      <WaveBack />
    </>
  );
};

let waveCount = 0;

const WaveBack: React.FC = () => {
  return (
    <>
      <button
        onClick={() => {
          waveCount = waveCount + 1;
          console.log({ waveCount });
        }}
      >
        <span
          style={{
            transform: "scale(-1, 1)",
          }}
        >
          👋
        </span>
        👋
      </button>
      <p>Du hast bereits {waveCount} mal zurück gewunken.</p>
    </>
  );
};
