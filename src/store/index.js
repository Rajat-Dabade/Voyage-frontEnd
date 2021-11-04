import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import flightSlice from "./flight";
import searchResultSlice from "./searchResultSlice";
import fareRuleSlice from "./fareRuleSlice";
import fareQuoteSlice from "./fareQuoteSlice";
import passengerSlice from "./passengerSlice";
import flightBookingSlice from "./flightBooking";
import ButtonSlice from "./buttonSlice";
import myBookingSlice from "./myBookingSlice";
import creditSlice from "./creditSlice";
import fareSlice from "./fareSlice";
import flightBookingDetailsSlice from "./flightBookingDetailsSlice";
import userManageSlice from "./admin/userManageSlice";
import cancellationSlice from "./cancellationSlice";

const store = configureStore({
  reducer: {
    flight: flightSlice.reducer,
    auth: authSlice.reducer,
    searchResult: searchResultSlice.reducer,
    fareRule: fareRuleSlice.reducer,
    fareQuote: fareQuoteSlice.reducer,
    passenger: passengerSlice.reducer,
    flightBooking: flightBookingSlice.reducer,
    button: ButtonSlice.reducer,
    booking: myBookingSlice.reducer,
    credit: creditSlice.reducer,
    fare: fareSlice.reducer,
    flightBookingDetails: flightBookingDetailsSlice.reducer,
    userManage: userManageSlice.reducer,
    flightCancellation: cancellationSlice.reducer,
  },
});

export default store;
