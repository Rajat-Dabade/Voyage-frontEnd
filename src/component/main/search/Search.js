import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Search.css";

import Flight from './flight/Flight';
import Hotel from './hotel/Hotel';

const Search = () => {

  const [showFlightSection, setShowFlightSection] = useState(true);

  const showFlightHandler = () => {
      setShowFlightSection(true);
  }

  const hideFlightHandler = () => {
    setShowFlightSection(false);
  }

  return (
    <>
      <Box>
        <Grid container justifyContent="center">
          <Grid item xs={11} md={8}>
            <Paper elevation={3} className="search-box">
              <Box className="search-section">
                <Button onClick={showFlightHandler} sx={{borderBottom: showFlightSection?  '2px solid #003C8D': ''}}>Flights</Button>
                <Button onClick={hideFlightHandler} sx={{borderBottom: !showFlightSection?  '2px solid #003C8D': ''}}>Hotels</Button>
                {showFlightSection? <Flight /> : <Hotel />}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Search;
