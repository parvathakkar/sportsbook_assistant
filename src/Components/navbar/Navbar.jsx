import React, { useState } from "react";
import "./navbar.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Matchup from "../matchup/Matchup";

const Navbar = () => {
  const [sport, setsport] = useState("");
  const handleSwitch = (event) => {
    setsport(event.target.value);
  };
  return (
    <div className="sportsNavbar">
      <div className="navbar_title">
        <h1>Parva's Sportsbook Assistant</h1>
      </div>
      <div className="dropdowns">
        <div className="sportsDropdown">
          <h3>
            <FormControl variant="outlined" fullWidth sx={{ m: 1, width: 300 }}>
              <InputLabel id="my-select-label">Select NFL or NBA</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={sport}
                onChange={handleSwitch}
                label="Select an Option"
                fullWidth
                variant="filled"
              >
                <MenuItem value="SPORT">
                  <em></em>
                </MenuItem>
                <MenuItem value={"americanfootball_nfl"}>NFL</MenuItem>
                <MenuItem value={"basketball_nba"}>NBA</MenuItem>
              </Select>
            </FormControl>
          </h3>
        </div>
      </div>
      <div className="sportsAuthor">
        <h3>Created By Parva</h3>
      </div>
    </div>
  );
};

export default Navbar;
