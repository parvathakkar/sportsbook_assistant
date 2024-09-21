import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import "./game.css";

const Game = ({ item }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogContent("");
  };
  /** @param Team // goes through all of the sportsbooks to get the moneyline odds for the
   * specified teams
   * similiar functionality for rest of methods
   * @returns a map of the teams money lines odds (key=team, value=odds)
   */
  const getMoneyLine = (team) => {
    const moneyBooks = new Map();

    item.bookmakers.forEach((bookmaker) => {
      const outcomes = bookmaker.markets[0].outcomes;
      const price =
        outcomes[0].name === team ? outcomes[0].price : outcomes[1].price;
      moneyBooks.set(bookmaker.title, price);
    });

    const max = Math.max(...moneyBooks.values());
    const [bestSportsbook] = [...moneyBooks].find(([, v]) => v === max);

    setDialogContent(
      `The best sportsbook for ${team} moneyline is ${bestSportsbook} with odds of ${max}`
    );
    setDialogOpen(true);
  };

  const getSpread = (team, isHome) => {
    const spreadBooks = new Map();

    item.bookmakers.forEach((bookmaker) => {
      const markets = bookmaker.markets;
      const spreadMarket = markets.find((market) => market.key === "spreads");
      if (spreadMarket) {
        const outcomes = spreadMarket.outcomes;
        const price =
          outcomes[0].name === team ? outcomes[0].price : outcomes[1].price;
        spreadBooks.set(bookmaker.title, price);
      }
    });

    const max = Math.max(...spreadBooks.values());
    const [bestSportsbook] = [...spreadBooks].find(([, v]) => v === max);

    const bestSpread = item.bookmakers
      .find((bm) => bm.title === bestSportsbook)
      .markets.find((market) => market.key === "spreads")
      .outcomes.find(
        (outcome) => outcome.name === (isHome ? team : item.away_team)
      ).point;

    setDialogContent(
      `The best sportsbook for ${
        isHome ? team : item.away_team
      } ${bestSpread} is ${bestSportsbook} with odds of ${max}`
    );
    setDialogOpen(true);
  };

  return (
    <div className="Game">
      <Box
        className="outer_box"
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        <Card variant="outlined">
          <CardContent className="outerCard">
            <Box
              className="home_box"
              component="span"
              sx={{
                display: "inline-block",
                mx: "2px",
                transform: "scale(0.8)",
              }}
            >
              <Card className="homeCard">
                <CardContent>
                  <Typography gutterBottom variant="h4">
                    Home Team: {item.home_team}
                  </Typography>
                  <CardActions className="card_buttons">
                    <Button
                      className="button"
                      variant="outlined"
                      size="Medium"
                      onClick={() => getMoneyLine(item.home_team)}
                    >
                      Get Best MoneyLine For Home Team
                    </Button>
                    <Button
                      className="button"
                      variant="outlined"
                      size="Medium"
                      onClick={() => getSpread(item.home_team, true)}
                    >
                      Get Best Home Spread
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
            <Divider orientation="vertical" flexItem>
              VS
            </Divider>
            <Box
              className="away_box"
              component="span"
              sx={{
                display: "inline-block",
                mx: "2px",
                transform: "scale(0.8)",
              }}
            >
              <Card className="awayCard">
                <CardContent>
                  <Typography gutterBottom variant="h4">
                    Away: {item.away_team}
                  </Typography>
                  <CardActions className="card_buttons">
                    <Button
                      className="button"
                      variant="outlined"
                      size="large"
                      onClick={() => getMoneyLine(item.away_team)}
                    >
                      Get Best MoneyLine For Away Team
                    </Button>
                    <Button
                      className="button"
                      variant="outlined"
                      size="large"
                      onClick={() => getSpread(item.away_team, false)}
                    >
                      Get Best Away Spread
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Result</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
      </Dialog>
    </div>
  );
};

export default Game;
