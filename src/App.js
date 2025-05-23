import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador Simples</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
        <button onClick={() => setCount(count - count)}>Zerar</button>
      </header>
    </div>
  );
}

export default App;
