import React from 'react';
import SideContainer from './components/SideComponent';

function App() {
  return (
    <div className="App">
      <SideContainer name={"blank"} />
      <SideContainer name={"edit"} />
    </div>
  );
}

export default App;
