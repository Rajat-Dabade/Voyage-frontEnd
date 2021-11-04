import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { flightBookingDetailsActions } from "../../store/flightBookingDetailsSlice";
import { flightBookingDetailsHandler } from "../../store/flightBookingDetailsHandler";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ShowMyTicketDetails from "../FlightTicket.js/ShowMyTicketDetails";
import { Grid } from "@mui/material";
import FlightCancellationCard from "../UI/Cancellation/Flight/FlightCancellationCard";
import FlightCancellationStatusModel from "../UI/Cancellation/Flight/FlightCancellationStatusModel";

const CancellationStatus = () => {
  const cancelledBooking = useSelector(
    (state) => state.flightCancellation.cancelledBooking
  );
  const flightBookingDetails = useSelector(
    (state) => state.flightBookingDetails.flightBookingDetails
  );
  const model = useSelector(
    (state) => state.flightCancellation.cancellationStatusModel
  );
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(flightBookingDetailsActions.setFlightBookingDetails({}));
    dispatch(flightBookingDetailsHandler(params, history));
  }, [params, history]);

  return (
    <>
      {model && <FlightCancellationStatusModel />}
      {JSON.stringify(flightBookingDetails) === JSON.stringify({}) ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Grid container spacing={1}>
          <Grid xs={12} md={8} lg={8} xl={8}>
            <ShowMyTicketDetails />
          </Grid>
          <Grid xs={12} md={4} lg={4} xl={4} sx={{ marginTop: "30px"}}>
          <h1 style={{textAlign: 'center'}}>Cancelled Bookings</h1>
            {cancelledBooking.map((bookings) => {
              return <FlightCancellationCard cancellationBooking={bookings} />;
            })}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CancellationStatus;
