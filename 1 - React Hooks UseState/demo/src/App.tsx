import React from "react";
import { CountRerender } from "./LittleHelpers/CountRerender";
import { StateHook } from "./StateHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wir lernen React</h1>
        <CountRerender>App</CountRerender>
      </header>
      <main>
        <StateHook />
      </main>
    </div>
  );
}

export default App;
