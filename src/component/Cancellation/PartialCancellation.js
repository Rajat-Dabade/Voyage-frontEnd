import React, { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

let top100Films = [];

const PartialCancellation = () => {

  const flightBookingDetails = useSelector(
    (state) => state.flightBookingDetails.flightBookingDetails
  );

  useEffect(() => {
    flightBookingDetails.Response.FlightItinerary.Passenger.map(passenger => {
        top100Films.push(passenger.Ticket.TicketId.toString());
        console.log(passenger.Ticket.TicketId);
    });

    return () => {
        top100Films = [];
    }
  }, [flightBookingDetails])



  const partialCancellationTicketId = (value) => {
      console.log(value);
  }


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Partial Cancellation</h1>
      <hr style={{ width: "200px" }}></hr>
      <Grid container spacing={2} justifyContent="center">
      <Autocomplete
      sx={{maxWidth: '400px', marginTop: '40px'}}
      onChange={(event, value) => {partialCancellationTicketId(value)}}
        multiple
        id="checkboxes-tags-demo"
        options={top100Films}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="Checkboxes" placeholder="TicketID" />
        )}
      />
      </Grid>
    </>
  );
};

export default PartialCancellation;
