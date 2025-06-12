import React, { useState } from 'react';
import './App.css';

import Matchup from './Components/matchup/Matchup';
import Navbar from './Components/navbar/Navbar';

function App() {
  const [selectedSport, setSelectedSport] = useState("");

  const handleSportChange = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div className="App">
      <Navbar onSportChange={handleSportChange} />
      <Matchup sportchosen={selectedSport} />
    </div>
  );
}

export default App;
