import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import ShowMyFlightBooking from './ShowMyFlightBooking';

import {myFlightBooking} from '../../../store/myFlightBooking';

const MyFlightBooking = () => {

    const dispatch = useDispatch();
    const myFlightBookings = useSelector((state) => state.booking.myFlightBookings);
    const open = useSelector((state) => state.booking.backDrop);

    useEffect(() => {
        dispatch(myFlightBooking());
    }, [dispatch]);

    return (
        <>
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        {myFlightBookings.length === 0? <Typography variant="h2" align="center" sx={{marginTop: '50px', fontWeight: 'blod'}}>No ticket</Typography>: myFlightBookings.map(ticket => <ShowMyFlightBooking key={ticket.id} ticket={ticket}/>)}
        </>
    )
}

export default MyFlightBooking;