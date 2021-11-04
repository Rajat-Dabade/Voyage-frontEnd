import {createSlice} from '@reduxjs/toolkit';

const flightBookingInitialState = {
    isBookingDone: false,
    oneWayticketInfo: {},
    secondWayTicketInfo: {}
}

const flightBookingSlice = createSlice({
    name: 'flightBookingSlice',
    initialState: flightBookingInitialState,
    reducers: {
        setIsBookingDone(state, action) {
            state.isBookingDone = action.payload;
        },
        setOneWayticketInfo(state, action) {
            state.oneWayticketInfo = action.payload;
        },
        setSecondWayTicketInfo(state, action) {
            state.secondWayTicketInfo = action.payload;
        }
    }
});

export const flightBookingActions = flightBookingSlice.actions;

export default flightBookingSlice;