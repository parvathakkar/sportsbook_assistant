import React from 'react';
import './App.css';

import Matchup from './Components/matchup/Matchup';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Matchup />
    </div>
  );
}

export default App;
