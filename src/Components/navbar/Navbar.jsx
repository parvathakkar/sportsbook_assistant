import React from "react";
import "./navbar.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Navbar = ({ onSportChange }) => {
  const handleSwitch = (event) => {
    onSportChange(event.target.value);
  };

  return (
    <div className="sportsNavbar">
      <div className="navbar_title">
        <h1>Sportsbook Assistant</h1>
      </div>
      <div className="dropdowns">
        <div className="sportsDropdown">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="sport-select-label">Select Sport</InputLabel>
            <Select
              labelId="sport-select-label"
              id="sport-select"
              defaultValue="SPORT"
              onChange={handleSwitch}
              label="Select Sport"
            >
              <MenuItem value="SPORT">
                <em>Select a sport</em>
              </MenuItem>
              <MenuItem value={"americanfootball_nfl"}>NFL</MenuItem>
              <MenuItem value={"basketball_nba"}>NBA</MenuItem>
              <MenuItem value={"icehockey_nhl"}>NHL</MenuItem>
              <MenuItem value={"baseball_mlb"}>MLB</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="sportsAuthor">
        <span>Created by Parva</span>
      </div>
    </div>
  );
};

export default Navbar;
