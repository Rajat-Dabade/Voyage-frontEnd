import { Grid, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Passenger from './Passenger';

const ShowMyTicketDetails = (props) => {
  const flightBookingDetails = useSelector(
    (state) => state.flightBookingDetails.flightBookingDetails
  );

  return (
    <>
      {JSON.stringify(flightBookingDetails) === JSON.stringify({}) ? (
        <h1>No data available</h1>
      ) : (
        <>
          <Paper
            elevation={24}
            sx={{ borderRadius: "70px", margin: "50px 50px" }}
          >
            


            <Grid sx={{ flexGrow: 1, padding: '30px' }} container spacing={2}>
                <Grid item xs={12}>
                    <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
                    Ticket
                    </h1>
                    <Paper elevation={3} sx={{ borderRadius: "15px", padding: '20px' }}>
                        <Grid container justifyContent="center" sx={{textAlign: 'center'}}>
                            <Grid xs={12} md={3} lg={3} xl={3} justifyContent="center">
                                <b>BookingID :</b>{" "}{flightBookingDetails.Response.FlightItinerary.BookingId}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>PNR :</b>{" "}{flightBookingDetails.Response.FlightItinerary.PNR}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>Origin : </b>{" "}{flightBookingDetails.Response.FlightItinerary.Origin}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>Destination : </b>{" "}{flightBookingDetails.Response.FlightItinerary.Destination}
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center" sx={{textAlign: 'center', marginTop: '20px'}}>
                            <Grid xs={12} md={3} lg={3} xl={3} justifyContent="center">
                                <b>AirlineCode :</b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Airline.AirlineCode}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>AirlineName :</b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Airline.AirlineName}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>FlightNumber : </b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Airline.FlightNumber}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>FareClass : </b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Airline.FareClass}
                            </Grid>
                        </Grid>
                    </Paper>

                    <h2 style={{textAlign: 'center',textDecoration: 'underline'}}>Origin</h2>

                    <Paper elevation={3} sx={{ borderRadius: "15px", margin: "20px", padding: '15px' }}>
                        <Grid container justifyContent="center" sx={{textAlign: 'center'}}>
                            <Grid xs={12} md={3} lg={3} xl={3} justifyContent="center">
                                <b>AirportCode :</b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Origin.Airport.AirportCode}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>AirportName :</b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Origin.Airport.AirportName}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>CityName : </b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Origin.Airport.CityName}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>Departure Time : </b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Origin.DepTime.substring(11)}
                            </Grid>
                        </Grid>
                    </Paper>

                    <h2 style={{textAlign: 'center',textDecoration: 'underline'}}>Destination</h2>

                    <Paper elevation={3} sx={{ borderRadius: "15px", margin: "20px", padding: '15px' }}>
                        <Grid container justifyContent="center" sx={{textAlign: 'center'}}>
                            <Grid xs={12} md={3} lg={3} xl={3} justifyContent="center">
                                <b>AirportCode :</b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Destination.Airport.AirportCode}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>AirportName :</b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Destination.Airport.AirportName}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>CityName : </b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Destination.Airport.CityName}
                            </Grid>
                            <Grid xs={12} md={3} lg={3} xl={3}>
                            <b>Arrival Time : </b>{" "}{flightBookingDetails.Response.FlightItinerary.Segments[0].Destination.ArrTime.substring(11)}
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper elevation={3} sx={{ borderRadius: "15px", margin: "20px", padding: '15px' }}>
                        <Grid container justifyContent="center" sx={{textAlign: 'center'}}>
                            <Grid item xs={12} md={6} lg={6} xl={6} justifyContent="center">
                                <h2>Passenger Information</h2>
                                {flightBookingDetails.Response.FlightItinerary.Passenger.map(passenger => {
                                    return <Passenger key={passenger.Ticket.TicketId}  passenger={passenger} />
                                })}
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} xl={6}>
                                <h2>Fare Breakup</h2>
                                <b>Publish Fare :</b> {flightBookingDetails.Response.FlightItinerary.Fare.PublishedFare} Rs
                            </Grid>
                        </Grid>
                    </Paper>

                </Grid>  
            </Grid>
           
          </Paper>
        </>
      )}
    </>
  );
};

export default ShowMyTicketDetails;
