import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const OneWay = (props) => {

  const [rows, setRow] = useState([]);
  const [asc, setAsc] = useState(false);

  const flightSelectHandler = (event) => {
    props.oneWaySelectedIndexHandler(event.target.value);
  }

  const oneWayData = useSelector((state) => state.searchResult.oneWayData);

  useEffect(() => {
    if (oneWayData.length) setRow(oneWayData);
  }, [oneWayData]);

  

  const sortByPrice = (event) => {
    let array = JSON.parse(event.target.value);
    let newArray = [];
    if(asc) {
      newArray = array.sort((a, b) => {
        return a.fare - b.fare;
      });
    } else {
      newArray = array.sort((a, b) => {
        return b.fare - a.fare;
      });
    }
    setAsc(!asc);
    setRow(newArray);
  }



  return (
    <>
    <Button value={JSON.stringify(rows)} onClick={sortByPrice} endIcon={asc? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}>Sort by price</Button>
      <Paper elevation={3} sx={{ marginTop: "10px !important", backgroundColor: 'black !important', color: 'white', textAlign: 'center'}}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" sx={{marginBottom: '15px'}}>Company</Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6" sx={{marginBottom: '15px'}}>Departure Time</Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6" sx={{marginBottom: '15px'}}>Arrival Time</Typography>
          </Grid>
          <Grid item xs={2}>
          <Typography variant="h6" sx={{marginBottom: '15px'}}>Fare</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{maxHeight: 500, overflow: 'auto'}}>
      <RadioGroup aria-label="flight" name="radio-buttons-group" onChange={flightSelectHandler}>
        {rows.map((flight) => (
          <Paper key={flight.id} elevation={3} sx={{ marginTop: "10px !important", textAlign: 'center'}}>
            <Grid  container spacing={1}>
              <Grid item xs={1} sx={{marginLeft: '10px'}}>
                <FormControlLabel
                  value={flight.id}
                  control={<Radio />}
                  label=""
                />
              </Grid>
              <Grid item xs={2} sx={{ marginTop: "10px" }}>
                {flight.companyName} {" "}
              </Grid>
              <Grid item xs={3} sx={{ marginTop: "10px" }}>
                {flight.departureDate.substring(11, 16)}
              </Grid>
              <Grid item xs={3} sx={{ marginTop: "10px" }}>
                {flight.arrivalTime.substring(11, 16)}
              </Grid>
              <Grid item xs={2} sx={{ marginTop: "10px" }}>
              Rs {flight.fare}
              </Grid>
            </Grid>
          </Paper>
        ))}
      </RadioGroup>
      </Paper>
    </>
  );
};

export default OneWay;
