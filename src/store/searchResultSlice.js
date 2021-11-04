import { createSlice } from "@reduxjs/toolkit";

const initialSearchResultSlice = {
  isResultAvaiable: false,
  isRoundTrip: false,
  traceId: '',
  oneWayData : [],
  twoWayData: []
};

const searchResultSlice = createSlice({
    name: 'searchResultSlice',
    initialState: initialSearchResultSlice,
    reducers: {
        setIsRoundTrip(state, action) {
            state.isRoundTrip = action.payload;
        },
        setOneWayData(state, action) {
            state.oneWayData = action.payload;
        },
        setTwoWayData(state, action) {
            state.twoWayData = action.payload;
        },
        setTraceId(state, action) {
            state.traceId = action.payload;
        },
        setIsResultAvaiable(state, action) {
            state.isResultAvaiable = action.payload;
        }
    }
});

export const searchResultActions = searchResultSlice.actions;

export default searchResultSlice;
