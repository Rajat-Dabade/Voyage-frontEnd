import {authActions} from './auth-slice';
import {fareQuoteActions} from './fareQuoteSlice';
import {flightAction} from './flight';
import {searchResultActions} from './searchResultSlice';


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

export const initialStateHandler = () => {
    return (dispatch) => {

        dispatch(authActions.setIsLogin(false));
        dispatch(authActions.setMobileNumber(""));
        dispatch(authActions.setPassword(""));
        dispatch(authActions.setUserName(""));
        dispatch(authActions.setError(false));
        
        dispatch(fareQuoteActions.setFareQuoteOneWay(false));
        dispatch(fareQuoteActions.setFareQuoteOneWay({}));
        dispatch(fareQuoteActions.setFareQuoteSecondWay({}));

        dispatch(flightAction.setIsRoundTrip(false));
        dispatch(flightAction.setFromData(""));
        dispatch(flightAction.setToData(""));
        dispatch(flightAction.setDepartureData(""));
        dispatch(flightAction.setReturnData(""));
        dispatch(flightAction.setAdultCount(0));
        dispatch(flightAction.setChildrenCount(0));
        dispatch(flightAction.setInfantCount(0));
        dispatch(flightAction.setIsSearching(false));

        dispatch(searchResultActions.setIsResultAvaiable(false));
        dispatch(searchResultActions.setIsRoundTrip(false));
        dispatch(searchResultActions.setTraceId(''));
        dispatch(searchResultActions.setOneWayData([]));
        dispatch(searchResultActions.setTwoWayData([]));
    }
}