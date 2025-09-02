import React from "react";
import "./navbar.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

const Navbar = ({ onSportChange, onSportsbookChange, selectedSportsbooks }) => {
  const handleSportSwitch = (event) => {
    onSportChange(event.target.value);
  };

  const handleSportsbookSwitch = (event) => {
    const newSelection = event.target.value;
    console.log("New selection:", newSelection);
    onSportsbookChange(newSelection);
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
              onChange={handleSportSwitch}
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
        <div className="sportsbookDropdown">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="sportsbook-select-label">Select Sportsbooks</InputLabel>
            <Select
              labelId="sportsbook-select-label"
              id="sportsbook-select"
              multiple
              value={selectedSportsbooks}
              onChange={handleSportsbookSwitch}
              label="Select Sportsbooks"
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return "Select Sportsbooks";
                }
                return selected.join(', ');
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                  },
                },
              }}
            >
              <MenuItem value="fanduel">
                <Checkbox checked={selectedSportsbooks.includes("fanduel")} />
                <ListItemText primary="FanDuel" />
              </MenuItem>
              <MenuItem value="mybookieag">
                <Checkbox checked={selectedSportsbooks.includes("mybookieag")} />
                <ListItemText primary="MyBookie.ag" />
              </MenuItem>
              <MenuItem value="betonlineag">
                <Checkbox checked={selectedSportsbooks.includes("betonlineag")} />
                <ListItemText primary="BetOnline.ag" />
              </MenuItem>
              <MenuItem value="lowvig">
                <Checkbox checked={selectedSportsbooks.includes("lowvig")} />
                <ListItemText primary="LowVig" />
              </MenuItem>
              <MenuItem value="draftkings">
                <Checkbox checked={selectedSportsbooks.includes("draftkings")} />
                <ListItemText primary="DraftKings" />
              </MenuItem>
              <MenuItem value="bovada">
                <Checkbox checked={selectedSportsbooks.includes("bovada")} />
                <ListItemText primary="Bovada" />
              </MenuItem>
              <MenuItem value="betrivers">
                <Checkbox checked={selectedSportsbooks.includes("betrivers")} />
                <ListItemText primary="BetRivers" />
              </MenuItem>
              <MenuItem value="betus">
                <Checkbox checked={selectedSportsbooks.includes("betus")} />
                <ListItemText primary="BetUS" />
              </MenuItem>
              <MenuItem value="betmgm">
                <Checkbox checked={selectedSportsbooks.includes("betmgm")} />
                <ListItemText primary="BetMGM" />
              </MenuItem>
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
