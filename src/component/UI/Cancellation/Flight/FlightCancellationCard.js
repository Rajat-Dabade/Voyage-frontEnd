import { Button, Grid, Paper } from '@mui/material';
import React from 'react';
import {cancellationActions} from '../../../../store/cancellationSlice';
import {useDispatch} from 'react-redux';

const FlightCancellationCard = (props) => {

    const dispatch = useDispatch();

    const checkStatusHandler = (event) => {
        dispatch(cancellationActions.setChangeRequestId(event.target.value));
        dispatch(cancellationActions.setCancellationStatusModel(true));
    }

    return (

        <>
            <Paper elevation={4} sx={{
                marginTop: '40px'
            }}>
                <Grid container spacing={2} sx={{padding: '10px 20px'}}>
                    <Grid xs={4} sx={{paddingTop: '10px'}}>
                        <b>Ticket ID:</b> {props.cancellationBooking.TicketId}
                    </Grid>
                    <Grid xs={4}></Grid>
                    <Grid xs={4}>
                        <Button variant="outlined" color="error" value={props.cancellationBooking.ChangeRequestId} onClick={checkStatusHandler}>Check Status</Button>
                    </Grid>
                </Grid>
            </Paper>
        </>
        // <h1>{JSON.stringify(props.cancellationBooking.TicketId)}</h1>
    )
}

export default FlightCancellationCard;