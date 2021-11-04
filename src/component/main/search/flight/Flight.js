import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TextField from "@mui/material/TextField";

import AutoFillInputFlightList from "./AutoFillInputFlightList";

import { flightAction } from "../../../../store/flight";
import { flightDataHandlingActions } from "../../../../store/flightDataHandlingActions";

import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import "./Flight.css";

const Flight = () => {

  const dispatch = useDispatch();
  const isRoundTrip = useSelector((state) => state.flight.isRoundTrip);
  const from = useSelector((state) => state.flight.from);
  const to = useSelector((state) => state.flight.to);
  const departureDate = useSelector((state) => state.flight.departureDate);
  const returnDate = useSelector((state) => state.flight.returnDate);
  const adultCount = useSelector((state) => state.flight.adultCount);
  const childrenCount = useSelector((state) => state.flight.childrenCount);
  const infantCount = useSelector((state) => state.flight.infantCount);
  const isSearching =  useSelector(state => state.flight.isSearching);

  const radioChangeHandler = (event) => {
    dispatch(flightAction.setIsRoundTrip(event.target.value));
  };

  const fromHandler = (event) => {
    
    if(event.target.innerText !== undefined &&  event.target.innerText.length > 3) {
      console.log(event.target.innerText);
      dispatch(flightAction.setFromData(event.target.innerText.substring(0, 3)));
    }
  };

  const toHandler = (event) => {
    
    if(event.target.innerText !== undefined && event.target.innerText.length > 3) {
      console.log(event.target.innerText);
      dispatch(flightAction.setToData(event.target.innerText.substring(0, 3)));
    }
     
  };

  const departureDateHandler = (event) => {
    dispatch(flightAction.setDepartureData(event.target.value));
  };

  const returnDateHandler = (event) => {
    dispatch(flightAction.setReturnData(event.target.value));
  };

  const adultCountHandler = (event) => {
    dispatch(flightAction.setAdultCount(event.target.value));
  };

  const childrenCountHandler = (event) => {
    dispatch(flightAction.setChildrenCount(event.target.value));
  };

  const infantCountHandler = (event) => {
    dispatch(flightAction.setInfantCount(event.target.value));
  };

  const searchFlight = () => {
    dispatch(flightAction.setIsSearching(true));

    console.log(from, to, departureDate);

    if(from === "" || to === "" || departureDate === "") {
      alert("Invalid data First ");
      dispatch(flightAction.setIsSearching(false));
      return;
    }

    if(adultCount === 0 && childrenCount === 0 && infantCount === 0) {
      alert("Invalid Count second");
      dispatch(flightAction.setIsSearching(false));
      return;
    }

    dispatch(flightDataHandlingActions({
      isRoundTrip,
      from,
      to,
      departureDate,
      returnDate,
      adultCount,
      childrenCount,
      infantCount
    }));
  };
  return (
    <>
      <Box>
        <Typography
          variant="body1"
          gutterBottom
          component="p"
          sx={{ marginTop: "10px", fontWeight: "bold", textAlign: "center" }}
        >
          Book Flight Ticket
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: "15px" }}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Grid container spacing={2} justifyContent="center">
              <RadioGroup
                row
                aria-label="way"
                defaultValue="1"
                name="row-radio-buttons-group"
                className="radio-style"
                onChange={radioChangeHandler}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="One Way"
                />
                <FormControlLabel value="2" control={<Radio />} label="Round" />
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>

        {/* AutoFillSection */}

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          <Grid item xs={12} md={4} className="search-input-field">
            <AutoFillInputFlightList
              label="From"
              onChange={fromHandler}
              value={from}
            />
          </Grid>
          <Grid item xs={12} md={1} className="icon-input-field">
            <Grid container justifyContent="center">
              <IconButton size="small">
                <CompareArrowsIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} className="search-input-field">
            <AutoFillInputFlightList
              label="To"
              onChange={toHandler}
              value={to}
            />
          </Grid>
        </Grid>

        {/* End AutoFillSection */}

        {/* Date Section  */}

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "20px" }}
        >
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="center">
              <TextField
                id="departureDate"
                InputLabelProps={{ shrink: true }}
                label="Departure Date"
                variant="outlined"
                type="date"
                className="search-input-field date-input-field"
                onChange={departureDateHandler}
                value={departureDate}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="center">
              <TextField
                id="returnDate"
                InputLabelProps={{ shrink: true }}
                label="Return Date"
                variant="outlined"
                type="date"
                className="search-input-field date-input-field"
                disabled={!isRoundTrip}
                onChange={returnDateHandler}
                value={returnDate}
              ></TextField>
            </Grid>
          </Grid>
        </Grid>

        {/* End Date section */}

        {/* Count section  */}

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="center">
              <TextField
                id="adultCount"
                label="Adult Count"
                inputProps={{ min: 0, max: 10 }}
                InputLabelProps={{ shrink: true }}
                type="number"
                variant="outlined"
                className="search-input-field count-input-field"
                onChange={adultCountHandler}
                value={adultCount}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="center">
              <TextField
                id="childrenCount"
                label="Children Count"
                inputProps={{ min: 0, max: 10 }}
                InputLabelProps={{ shrink: true }}
                type="number"
                variant="outlined"
                className="search-input-field count-input-field"
                onChange={childrenCountHandler}
                value={childrenCount}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="center">
              <TextField
                id="infantCount"
                label="Infant Count"
                inputProps={{ min: 0, max: 10 }}
                InputLabelProps={{ shrink: true }}
                type="number"
                variant="outlined"
                className="search-input-field count-input-field"
                onChange={infantCountHandler}
                value={infantCount}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* End Count Section  */}

        {/* Search Button section  */}

        <Grid item xs={12}>
          <Grid container justifyContent="center">
            {!isSearching ? (
              <Button
                variant="contained"
                size="large"
                className="search-input-field search-button"
                onClick={searchFlight}
              >
                Search
              </Button>
            ) : (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                className="search-input-field search-button"
              >
                Searching
              </LoadingButton>
            )}
          </Grid>
        </Grid>

        {/* End Search Button Section  */}
      </Box>
    </>
  );
};

export default Flight;
