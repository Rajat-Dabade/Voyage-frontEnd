import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import { fontWeight } from "@mui/system";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import {useSelector} from 'react-redux';
import { Button } from "@mui/material";

import {generateTicket} from '../../store/generateTicket';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Ticket = (props) => {

  const history = useHistory();

  const dispatch = useDispatch();
  const oneWayticketInfo = useSelector((state) => state.flightBooking.oneWayticketInfo);
  const secondWayTicketInfo = useSelector((state) => state.flightBooking.secondWayTicketInfo);
  const isRoundTrip = useSelector((state) => state.searchResult.isRoundTrip);
  const from  = useSelector((state) => state.flight.from);
  const to = useSelector((state) => state.flight.to);
  const [generateTicketButtonOneWay, setGenerateTicketButtonOneWay] = useState(false);
  const [generateTicketButtonSecondWay, setGenerateTicketButtonSecondWay] = useState(false);


  const bookTicketHandlerOneWay = (event) => {
    setGenerateTicketButtonOneWay(true);
    dispatch(generateTicket(JSON.parse(event.target.value), setGenerateTicketButtonOneWay));
  }

  const bookTicketHandlerSecondWay = (event) => {
    setGenerateTicketButtonSecondWay(true);
    dispatch(generateTicket(JSON.parse(event.target.value), setGenerateTicketButtonSecondWay));
  }

  useEffect(() => {
    if(JSON.stringify(oneWayticketInfo) === JSON.stringify({})) {
      history.push('/');
    }
  });

  return (
    <>
      <Paper
        variant="elevation"
        elevation={12}
        sx={{ margin: "50px 10%", borderRadius: "70px"}}
      >
        <Card sx={{ borderRadius: '20px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[400] }} aria-label="recipe">
                T
              </Avatar>
            }
            title="Ticket"
            titleTypographyProps={{ variant: "h6" }}
          />
          <CardContent>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={2} lg={2} xl={2}>
                <BookmarksIcon sx={{ marginLeft: '1px', width: '100px', height: '100px' }} color={oneWayticketInfo.Response.Response.FlightItinerary.IsLCC? "success": "primary" } />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Typography style={{ display: 'block',position: 'absolute', float: 'left' }} variant="body1">From : {from} To: {to}</Typography><br></br><br></br>
                <Typography style={{ display: 'inline', float: 'left' }}>PNR Number: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{oneWayticketInfo.Response.Response.PNR}</Typography><br></br><br></br>
                <Typography style={{ display: 'inline' }}>Booking ID: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{oneWayticketInfo.Response.Response.BookingId}</Typography><br></br><br></br>
                <Typography style={{ display: 'inline' }}>Transaction ID: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{oneWayticketInfo.Response.TraceId}</Typography><br></br><br></br>
              </Grid>
            </Grid>
            {!oneWayticketInfo.Response.Response.FlightItinerary.IsLCC &&
            <Grid container spacing={2} justifyContent="center" sx={{marginTop: '5px'}}>
              {generateTicketButtonOneWay ? 
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                Generating Ticket
              </LoadingButton> : 
              <Button variant="contained" value={
                JSON.stringify({
                  TraceId: oneWayticketInfo.Response.TraceId,
                  PNR: oneWayticketInfo.Response.Response.PNR,
                  BookingId: oneWayticketInfo.Response.Response.BookingId
                })
              } onClick={bookTicketHandlerOneWay}>Generate Ticket</Button>
              }
              
            </Grid>}
          {!oneWayticketInfo.Response.Response.FlightItinerary.IsLCC && 
          <>
            <Typography variant="subtitle2" align="center" sx={{color: '#005EB1', marginTop: '10px'}}>
              *As this ticket was for NON LCC flight you can hold the ticket or you can press GENERATE TICKET button to confirm your ticket.
              <br />
              The amount will be get debited from your credit score as you proceed.
            </Typography>
          </>}
          </CardContent>
        </Card>
      </Paper>

      {isRoundTrip && (JSON.stringify(secondWayTicketInfo) !== JSON.stringify({})) ?
      <Paper
        variant="elevation"
        elevation={12}
        sx={{ margin: "0px 10%", borderRadius: "70px"}}
      >
        <Card sx={{ borderRadius: '20px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[400] }} aria-label="recipe">
                T
              </Avatar>
            }
            title="Ticket"
            titleTypographyProps={{ variant: "h6" }}
          />
          <CardContent>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={2} lg={2} xl={2}>
                <BookmarksIcon sx={{ marginLeft: '1px', width: '100px', height: '100px', color:secondWayTicketInfo.Response.Response.FlightItinerary.IsLCC? "#00B130": "primary" }} />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
              <Typography style={{ display: 'block',position: 'absolute', float: 'left' }} variant="body1">From : {to} To: {from}</Typography><br></br><br></br>
                <Typography style={{ display: 'inline', float: 'left' }}>PNR Number: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{secondWayTicketInfo.Response.Response.PNR}</Typography><br></br><br></br>
                <Typography style={{ display: 'inline' }}>Booking ID: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{secondWayTicketInfo.Response.Response.BookingId}</Typography><br></br><br></br>
                <Typography style={{ display: 'inline' }}>Transaction ID: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{secondWayTicketInfo.Response.TraceId}</Typography><br></br><br></br>
              </Grid>
            </Grid>
            {!secondWayTicketInfo.Response.Response.FlightItinerary.IsLCC &&
            <Grid container spacing={2} justifyContent="center" sx={{marginTop: '5px'}}>
              {generateTicketButtonSecondWay ? 
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                Generating Ticket
              </LoadingButton> : 
              <Button variant="contained" value={
                JSON.stringify({
                  TraceId: secondWayTicketInfo.Response.TraceId,
                  PNR: secondWayTicketInfo.Response.Response.PNR,
                  BookingId: secondWayTicketInfo.Response.Response.BookingId
                })
              } onClick={bookTicketHandlerSecondWay}>Generate Ticket</Button> 
              }
            </Grid>}
            {!secondWayTicketInfo.Response.Response.FlightItinerary.IsLCC && 
            <>
              <Typography variant="subtitle2" align="center" sx={{color: '#005EB1', marginTop: '10px'}}>*As this ticket was for NON LCC flight you can hold the ticket or you can press GENERATE TICKET button to confirm your ticket.</Typography>
            </>}
          </CardContent>
        </Card>

      </Paper> : <></> }



    </>



  );
};

export default Ticket;
