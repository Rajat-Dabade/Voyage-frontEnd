import { fareRuleActions } from "./fareRuleSlice";
import {authActions} from './auth-slice';

export const fareRuleHandler = (data) => {
  return async (dispatch) => {
    const sendRequest = async (requestData) => {
      const response = await fetch("http://localhost:3000/api/getFareRules", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("accessToken"),
        },
      });

      if (!response.ok) {
        throw new Error("Fail to fetch the FareRule");
      }

      const responseDate = await response.json();

      console.log("Response Data of FareRules : " + JSON.stringify(responseDate));

      return responseDate;
    };

    try {
      const requestDataOneWay = {
        EndUserIp: "192.168.11.58",
        TraceId: data.TraceId,
        ResultIndex: data.ResultIndex[0],
      };

      const responseDataOneWay = await sendRequest(requestDataOneWay);

      console.log("FareRule Request Data One Way" + JSON.stringify(responseDataOneWay));

      if (responseDataOneWay.Response.ResponseStatus !== 1) {
        alert("Error occur :" + responseDataOneWay.Response.Error.ErrorMessage);
        return;
      }

      dispatch(fareRuleActions.setFareRuleOneWay(responseDataOneWay));

      if (data.ResultIndex[1] !== null) {
        const requestDataSecondWay = {
          EndUserIp: "192.168.11.58",
          TraceId: data.TraceId,
          ResultIndex: data.ResultIndex[1],
        };

        console.log("FareRule Request Data Second way " + JSON.stringify(requestDataSecondWay));


        const responseDataSecondWay = await sendRequest(requestDataSecondWay);

        if (responseDataSecondWay.Response.ResponseStatus !== 1) {
          alert(
            "Error occur :" + responseDataSecondWay.Response.Error.ErrorMessage
          );
          return;
        }

        dispatch(fareRuleActions.setFareRuleSecondWay(responseDataSecondWay));
      }
      dispatch(fareRuleActions.setIsFareRuleDone(true));
    } catch (error) {
      dispatch(fareRuleActions.setIsFareRuleDone(false));
      localStorage.clear();
      dispatch(authActions.setIsAuthenticated(false));
      alert("Error occur while fetching FareRules");
      return;
    }
  };
};
