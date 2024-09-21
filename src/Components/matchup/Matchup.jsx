import { useState, useEffect } from "react";
import axios from "axios";
import "./matchup.css";
import Game from "../game/Game";

const Matchup = ({ sportchosen }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`;
  const [data, setData] = useState([]); //we have a set state where we will store the response of the api as an array
  useEffect(() => {
    //within a use effect we are calling the api
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(
          "Error while fetching data",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  return (
    <div className="Matchup">
      {data.map(
        (
          item,
          index //this map function will go through the data array and pass on the item value to the game component as a prop
        ) => (
          <Game key={index} item={item} /> //the game component is where we can have the information
        )
      )}
    </div>
  );
};

export default Matchup;
