import { fareQuoteActions } from "./fareQuoteSlice";
import {buttonActions} from './buttonSlice';

export const fareQuoteHandler = (data) => {
  return async (dispatch) => {
    const sendRequest = async (requestData) => {
      const response = await fetch("http://localhost:3000/api/fareQoute", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("accessToken"),
        },
      });

      if (!response.ok) {
        throw new Error("Fail to fetch fareQuote for the selected flight");
      }

      const responseData = await response.json();

      console.log("Response from FareQuote : " + JSON.stringify(responseData));

      return responseData;
    };

    try {
      const requestDataOneWay = {
        EndUserIp: "192.168.11.58",
        TraceId: data.TraceId,
        ResultIndex: data.ResultIndex[0],
      };

      console.log("Fare Quote one Way Request " + JSON.stringify(requestDataOneWay));

      const responseDataOneWay = await sendRequest(requestDataOneWay);
      if (responseDataOneWay.Response.ResponseStatus !== 1) {
        alert("Error occur :" + responseDataOneWay.Response.Error.ErrorMessage);
        return;
      }

      console.log("FareQuotes" + JSON.stringify(responseDataOneWay));
      
      dispatch(fareQuoteActions.setFareQuoteOneWay(responseDataOneWay));

      if (data.ResultIndex[1] !== null) {
        const requestDataSecondWay = {
          EndUserIp: "192.168.11.58",
          TraceId: data.TraceId,
          ResultIndex: data.ResultIndex[1],
        };

      console.log("Fare Quote Second Way Request " + JSON.stringify(requestDataSecondWay));

        const responseDataSecondWay = await sendRequest(requestDataSecondWay);

        if (responseDataSecondWay.Response.ResponseStatus !== 1) {
          alert(
            "Error occur :" + responseDataSecondWay.Response.Error.ErrorMessage
          );
          return;
        }

        dispatch(fareQuoteActions.setFareQuoteSecondWay(responseDataSecondWay));
      }

      dispatch(fareQuoteActions.setIsFareQuoteDone(true));
      dispatch(buttonActions.setProceedToBookAfterSearchBtn(false));
      console.log("Done....");
    } catch (error) {
      dispatch(fareQuoteActions.setIsFareQuoteDone(false));
      alert("Error occur while fetching FareQuotes");
      return;
    }
  };
};
