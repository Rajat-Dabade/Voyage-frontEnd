import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    myFlightBookings: [],
    myHotelsBookings: [],
    backDrop: true
}

const myBookingSlice = createSlice({
    name: 'myBookingSlice',
    initialState: initialState,
    reducers: {
        setMyFlightBoookings(state, action) {
            state.myFlightBookings = action.payload;
        },
        setMyHotelsBookings(state, action) {
            state.myHotelsBookings = action.payload;
        },
        setBackDrop(state, action) {
            state.backDrop = action.payload;
        }
    }
});


export const myBookingActions = myBookingSlice.actions;

export default myBookingSlice;