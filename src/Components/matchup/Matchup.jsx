import { useState, useEffect } from "react";
import axios from "axios";
import "./matchup.css";
import Game from "../game/Game";

const Matchup = ({ sportchosen, selectedSportsbooks }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sportchosen || sportchosen === "SPORT") {
      setData([]);
      return;
    }

    const url = `https://api.the-odds-api.com/v4/sports/${sportchosen}/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`;
    
    axios
      .get(url)
      .then((response) => {
        console.log("API Response:", response.data);
        setData(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error while fetching data:", error.response ? error.response.data : error.message);
        setError("Failed to fetch data. Please check your API key and try again.");
        setData([]);
      });
  }, [sportchosen, apiKey]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="Matchup">
      {data.map((item, index) => (
        <Game key={index} item={item} selectedSportsbooks={selectedSportsbooks} />
      ))}
    </div>
  );
};

export default Matchup;
