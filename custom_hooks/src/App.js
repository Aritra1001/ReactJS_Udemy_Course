import React from 'react';
import BackwardCounter from './Components/BackwardCounter';
import ForwardCounter from './Components/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
