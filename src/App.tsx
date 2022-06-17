import React, { useState } from 'react';
import './App.css';

const App = (): JSX.Element => {
  const [state, setState] = useState<number>(0);
  const calcSum = (): void => setState(state + 1);

  return (
    <>
      <h1>
        calc: { state }
      </h1>
      <button onClick={calcSum} type="button">
        click me
      </button>
    </>
  );
};

export default App;
