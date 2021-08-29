import React, { useState } from "react";
import './App.css';

function App() {
  const [mode, setMode] = useState(false);
  const switchMode = () => setMode(mode ? false : true);
  return (
    <div className="App" data-theme={mode ? "dark" : "light"}>
      <h1>Helloo!!</h1>
      <h2>Let's begin with our tutorial!</h2>
      <button onClick={switchMode}>Switch mode</button>
    </div>
  );
}

export default App;
