import React, {useState} from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { green, red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import {useHistory} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import { Button } from "@mui/material";
import {generateTicket} from '../../../store/generateTicket';
import { Link } from 'react-router-dom';
import {releasePnrHandler} from '../../../store/cancellationHandler';
import {showCancellationStatus} from '../../../store/cancellationHandler';

const ShowMyFlightBooking = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [generateTicketButton, setGenerateTicketButton] = useState(false);
    const [releasePnrBtn, setReleasePnrBtn] = useState(false);
    const [cancellationStatus, setCancellationStatus] = useState(false);

    const bookTicketHandler = (event) => {
        setGenerateTicketButton(true);
        dispatch(generateTicket(JSON.parse(event.target.value), setGenerateTicketButton));
      }

      const releasePnr = (event) => {
        setReleasePnrBtn(true);
        dispatch(releasePnrHandler(event.target.value, setReleasePnrBtn));
      }

      const cancellationStatusHandler = (event) => {
        setCancellationStatus(true);
        const data = {
          bookingId: props.ticket.bookingId,
          pnr: props.ticket.pnr
        }
        dispatch(showCancellationStatus(data, history, setCancellationStatus));
      }


    return (
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
                <BookmarksIcon sx={{ marginLeft: '1px', width: '100px', height: '100px' }} color={props.ticket.isTicketDone? "success": "primary" } />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Typography style={{ display: 'block',position: 'absolute', float: 'left' }} variant="body1">From : <b> {props.ticket.from}</b> To: <b>{props.ticket.to}</b></Typography><br></br><br></br>
                <Typography style={{ display: 'inline', float: 'left' }}>PNR Number: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{props.ticket.pnr}</Typography><br></br><br></br>
                <Typography style={{ display: 'inline' }}>Booking ID: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{props.ticket.bookingId}</Typography><br></br><br></br>
                <Typography style={{ display: 'inline' }}>Transaction ID: </Typography>
                <Typography style={{ display: 'inline', fontWeight: 'bolder' }}>{props.ticket.traceId}</Typography><br></br><br></br>
              </Grid>
            </Grid>
            {(!props.ticket.isTicketDone && !props.appliedForCancellation) &&
            <Grid container spacing={2} justifyContent="center" sx={{marginTop: '5px'}}>
              {generateTicketButton ? 
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
                  TraceId: props.ticket.traceId,
                  PNR: props.ticket.pnr,
                  BookingId: props.ticket.bookingId,
                  publishFare: props.ticket.publishFare,
                })
              } onClick={bookTicketHandler}>Generate Ticket</Button>
              }
              
            </Grid>}
          {!props.ticket.isTicketDone && 
          <>
            <Typography variant="subtitle2" align="center" sx={{color: '#005EB1', marginTop: '10px'}}>
              *As this ticket was for NON LCC flight you can hold the ticket or you can press GENERATE TICKET button to confirm your ticket.
              <br />
              The amount will be get debited from your credit score as you proceed.
            </Typography>
          </>}
            {props.ticket.isTicketDone && !props.ticket.appliedForCancellation &&
          <Link to={`/cancellation/${props.ticket.pnr}/${props.ticket.bookingId}/${props.ticket.id}`} style={{textDecoration: 'none', float: 'right', margin: '10px'}}><Button variant="contained" color="error">Cancel Ticket</Button></Link>
            }
            {!props.ticket.isTicketDone ? 
              releasePnrBtn ? 
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                sx={{float: 'right', margin: '10px'}}
              >
                Releasing PNR
              </LoadingButton> : 
              <Button variant="contained" color="error" sx={{float: 'right', margin: '10px'}} value={props.ticket.bookingId} onClick={releasePnr}>Release PNR</Button>
            : null}

            {(props.ticket.isTicketDone && props.ticket.appliedForCancellation) ?
              cancellationStatus ?
               <LoadingButton
               loading
               loadingPosition="start"
               startIcon={<SaveIcon />}
               variant="contained"
               sx={{float: 'right', margin: '10px'}}
             >
               Gethering Status
             </LoadingButton> : 
             <Button variant="contained" color="error" sx={{float: 'right', margin: '10px'}} value={props.ticket.bookingId} onClick={cancellationStatusHandler}>Cancellation Status</Button>
            : null}
          </CardContent>
        </Card>
      </Paper>
    )
}


export default ShowMyFlightBooking;