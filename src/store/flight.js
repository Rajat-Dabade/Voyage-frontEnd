import { createSlice } from "@reduxjs/toolkit";

const initalFlightState = {
  isRoundTrip: false,
  from: "",
  to: "",
  departureDate: "",
  returnDate: "",
  adultCount: 0,
  childrenCount: 0,
  infantCount: 0,
  isSearching: false,
};

const flightSlice = createSlice({
  name: "flight",
  initialState: initalFlightState,
  reducers: {
    setIsRoundTrip(state, action) {
      if (action.payload === "1") {
        state.isRoundTrip = false;
      } else {
        state.isRoundTrip = true;
      }
    },
    setFromData(state, action) {
      state.from = action.payload;
    },
    setToData(state, action) {
      state.to = action.payload;
    },
    setDepartureData(state, action) {
      state.departureDate = action.payload;
    },
    setReturnData(state, action) {
      state.returnDate = action.payload;
    },
    setAdultCount(state, action) {
      state.adultCount = action.payload;
    },
    setChildrenCount(state, action) {
      state.childrenCount = action.payload;
    },
    setInfantCount(state, action) {
      state.infantCount = action.payload;
    },
    setIsSearching(state, action) {
        state.isSearching = action.payload;
    }
  },
});

export const flightAction = flightSlice.actions;

export default flightSlice;
