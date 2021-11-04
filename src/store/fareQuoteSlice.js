import { createSlice } from "@reduxjs/toolkit";

const initialFareQuoteState = {
    isFareQuoteDone: false,
    fareQuoteOneWay: {},
    fareQuoteSecondWay: {}
};

const fareQuoteSlice = createSlice({
    name: 'fareQuote',
    initialState: initialFareQuoteState,
    reducers: {
        setIsFareQuoteDone(state, action) {
            state.isFareQuoteDone = action.payload;
        },
        setFareQuoteOneWay(state, action) {
            state.fareQuoteOneWay = action.payload;
        },
        setFareQuoteSecondWay(state, action) {
            state.fareQuoteSecondWay = action.payload;
        }
    }
});

export const fareQuoteActions = fareQuoteSlice.actions;

export default fareQuoteSlice;