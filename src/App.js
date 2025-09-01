import React, { useState, useEffect } from 'react';
import './App.css';

import Matchup from './Components/matchup/Matchup';
import Navbar from './Components/navbar/Navbar';

function App() {
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedSportsbooks, setSelectedSportsbooks] = useState([]);
  
  const handleSportChange = (sport) => {
    setSelectedSport(sport);
  };

  const handleSportsbookChange = (sportsbooks) => {
    setSelectedSportsbooks(sportsbooks);
  };

  return (
    <div className="App">
      <Navbar 
        onSportChange={handleSportChange} 
        onSportsbookChange={handleSportsbookChange}
        selectedSportsbooks={selectedSportsbooks}
      />
      <Matchup 
        sportchosen={selectedSport} 
        selectedSportsbooks={selectedSportsbooks}
      />
    </div>
  );
}

export default App;
