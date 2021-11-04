import { Button, Grid } from '@mui/material';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import  {fullCancellationHandler} from '../../store/cancellationHandler';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import PartialCancellation from './PartialCancellation';

const CancelFlightTicket = (props) => {

    const dispatch = useDispatch();
    const [isFullCancelling, setIsFullCancelling] = useState(false);
    const [showPartialCancelltion, setShowPartialCancellation] = useState(false);

    const flightBookingDetails = useSelector(
        (state) => state.flightBookingDetails.flightBookingDetails
    );

    const fullCancellation = (event) => {
        setIsFullCancelling(true);
        dispatch(fullCancellationHandler(flightBookingDetails.Response.FlightItinerary.BookingId, props.ticketId, setIsFullCancelling));
    }

    const partialCancellation = (event) => {
        console.log("Partial cancellation click");
        setShowPartialCancellation(true);
    }

    return (
        <>
        <p style={{textAlign: 'center', fontSize: '40px', color: '#FF6A6A' }}>Cancellation</p>
        <Grid sx={{ flexGrow: 1, padding: '30px' }} container spacing={2}>
            <Grid item xs={12}>
            <Grid container justifyContent="center" sx={{textAlign: 'center'}}>
            <Grid item xs={12} md={5} lg={5} xl={5} justifyContent="center">
            {isFullCancelling? 
                <LoadingButton
                    loading
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                >
                    Full Cancelling
                </LoadingButton> :
                <Button variant="contained" color="error" size="large" onClick={fullCancellation}>Full <br></br>cancellation</Button>
            }
            </Grid>
            <Grid item xs={12} md={7} lg={7} xl={7} justifyContent="center">
                <Button variant="outlined" color="error" size="large" onClick={partialCancellation}>Partial<br></br> Cancellation</Button>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12} justifyContent="center">
                {showPartialCancelltion && <PartialCancellation />}
            </Grid>
            </Grid>
               
            </Grid>
        </Grid>
        </>
    )
}

export default CancelFlightTicket;