import {createSlice} from '@reduxjs/toolkit';

const initialFlightbookingDetailsState =  {
    flightBookingDetails: {}
};

const flightBookingDetailsSlice = createSlice({
    name: 'flightBookingDetails',
    initialState: initialFlightbookingDetailsState,
    reducers: {
        setFlightBookingDetails(state, action) {
            state.flightBookingDetails = action.payload;
        }
    }
});

export const flightBookingDetailsActions = flightBookingDetailsSlice.actions;

export default flightBookingDetailsSlice;