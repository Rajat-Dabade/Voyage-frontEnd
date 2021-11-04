import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flightBookingDetailsHandler } from "../../store/flightBookingDetailsHandler";
import { useHistory } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { flightBookingDetailsActions } from "../../store/flightBookingDetailsSlice";
import ShowMyTicketDetails from "../FlightTicket.js/ShowMyTicketDetails";
import { Grid } from "@mui/material";
import CancelFlightTicket from './CancelFlightTicket';

const Cancellation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const flightBookingDetails = useSelector(
    (state) => state.flightBookingDetails.flightBookingDetails
  );

  useEffect(() => {
    dispatch(flightBookingDetailsActions.setFlightBookingDetails({}));
    dispatch(flightBookingDetailsHandler(params, history));
  }, [params, history]);

  return (
    <>
      {JSON.stringify(flightBookingDetails) === JSON.stringify({}) ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
          <Grid container spacing={1}>
              <Grid item xs={12} md={12} lg={8} xl={8}>
                <ShowMyTicketDetails />
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} sx={{marginTop: '30px'}}>
                <CancelFlightTicket ticketId={params.ticketId}/>
              </Grid>
          </Grid>
        
      )}
    </>
  );
};

export default Cancellation;
