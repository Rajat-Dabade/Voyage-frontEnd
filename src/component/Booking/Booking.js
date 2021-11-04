import React from 'react';
import FareBreakUp from './FareBreakUp';
import FareRule from './FareRule';
import ReviewItinerary from './ReviewItinerary';
import TravellerInfomation from './TravellerInfomation';

const Booking = () => {
    return (
        <>
        <ReviewItinerary />
        <FareRule />
        <FareBreakUp />
        <TravellerInfomation />
        </>
    )
}

export default Booking;