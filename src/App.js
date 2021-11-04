import { useEffect } from "react";

import "./App.css";

import Navbar from "./component/header/navbar/Navbar";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Main from "./component/main/Main";
import Login from "./component/UI/Login";
import Booking from "./component/Booking/Booking";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/auth-slice";
import { Route, Switch } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import {passengerInitialSetter} from './store/passengerHandler'; 

import {flightBookingActions} from './store/flightBooking';
import { searchResultActions } from "./store/searchResultSlice";

import {initialStateHandler} from './store/initialStateHandler';
import Ticket from "./component/FlightTicket.js/Ticket";
import MyFlightBooking from './component/MyBooking/flight/MyFlightBooking';
import {creditHandler} from './store/creditHandler';
import {creditActions} from './store/creditSlice';
import Cancellation from "./component/Cancellation/Cancellation";
import Admin from "./component/Admin/Admin";
import CancellationStatus from "./component/Cancellation/CancellationStatus";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#F8FFFF",
    },
    blackColor: {
      main: "#000",
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const modalBox = useSelector((state) => state.auth.modalBox);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const isFareRuleDone = useSelector((state) => state.fareRule.isFareRuleDone);
  const isFareQuoteDone = useSelector((state) => state.fareQuote.isFareQuoteDone);
  const fareQuote = useSelector((state) => state.fareQuote.fareQuoteOneWay);
  const isRoundTrip = useSelector((state) => state.searchResult.isRoundTrip);
  const oneWayticketInfo = useSelector((state) => state.flightBooking.oneWayticketInfo);
  const secondWayTicketInfo = useSelector((state) => state.flightBooking.secondWayTicketInfo);
  const isBookingDone = useSelector((state) => state.flightBooking.isBookingDone);
  

  useEffect(() => {
    console.log("Here");
    dispatch(creditActions.setCredit(0.0));
    if(isAuthenticated)
      dispatch(creditHandler())
  });




  useEffect(() => {
    if(JSON.stringify(oneWayticketInfo) !== JSON.stringify({})) {
      if(!isRoundTrip) {
        dispatch(flightBookingActions.setIsBookingDone(true));
      } else {
        if(JSON.stringify(secondWayTicketInfo) !== JSON.stringify({})) {
          dispatch(flightBookingActions.setIsBookingDone(true));
        }
      }
    }
  }, [isRoundTrip, oneWayticketInfo, secondWayTicketInfo]);



  useEffect(() => {
    if(isBookingDone) {
      history.replace('/ticket')
    }
  }, [isBookingDone]);
  


  useEffect(() => {

    console.log("FareRule and FareQuote: " + isFareRuleDone, isFareQuoteDone)
    console.log("FareQuotes results" + fareQuote);
    if(isFareRuleDone && isFareQuoteDone) {
      history.replace('/booking');
      dispatch(passengerInitialSetter(fareQuote));
    } else {
      history.replace('/');
    }
  }, [isFareRuleDone, isFareQuoteDone, fareQuote, history, dispatch]);

  useEffect(() => {
    if (localStorage.getItem("username") !== null) {
      dispatch(authActions.setUserName(localStorage.getItem("username")));
      dispatch(authActions.setIsAuthenticated(true));
    }
  }, [isAuthenticated, dispatch, history]);

  if(!isAuthenticated) {
    history.push('/');
  }

  return (
    <>
      {modalBox && <Login />}
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
      <main>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/mybooking">
            <MyFlightBooking />
          </Route>
          <Route path="/booking" exact>
            {isFareRuleDone && isFareQuoteDone ? <Booking/> : history.replace('/')}
          </Route>
          <Route path="/ticket" exact>
            {JSON.stringify(oneWayticketInfo) !== JSON.stringify({}) ?  <Ticket />: history.replace('/')}
          </Route>
          <Route path="/cancellation/status/:pnr/:bookingId" exact>
              <CancellationStatus />
          </Route>
          <Route path="/cancellation/:pnr/:bookingId/:ticketId" exact>
            <Cancellation />
          </Route>
          <Route path="/adminpanel">
            {sessionStorage.getItem('isAdmin') ? <Admin />: history.replace('/')}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
