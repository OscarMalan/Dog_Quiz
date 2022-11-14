import React from 'react';
import Theme from './Navbar';

function App() {
  return (
    <div className={`App ${Theme}`}>
      <div className="App-header">
        <p>This test is about the best dog breeds</p>
        <img src={require('./Dog1.jpeg')} alt="Doggo poggo" />
      </div>
    </div>
  );
}

export default App;
