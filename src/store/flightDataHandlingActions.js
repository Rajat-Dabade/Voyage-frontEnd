import { flightAction } from "./flight";
import { searchResultActions } from "./searchResultSlice";

export const flightDataHandlingActions = (data) => {
  return async (dispatch) => {
    const oneWayRequestData = {
      EndUserIp: "192.168.10.10",
      AdultCount: data.adultCount,
      ChildCount: data.childrenCount,
      InfantCount: data.infantCount,
      DirectFlight: "true",
      OneStopFlight: "false",
      JourneyType: data.isRoundTrip ? "2" : "1",
      PreferredAirlines: null,
      Segments: [
        {
          Origin: data.from,
          Destination: data.to,
          FlightCabinClass: "1",
          PreferredDepartureTime: data.departureDate + "T00:00:00",
          PreferredArrivalTime: data.departureDate + "T00:00:00",
        },
      ],
      Sources: null,
    };

    const twoWayRequestData = {
      EndUserIp: "192.168.10.10",
      AdultCount: data.adultCount,
      ChildCount: data.childrenCount,
      InfantCount: data.infantCount,
      DirectFlight: "true",
      OneStopFlight: "false",
      JourneyType: data.isRoundTrip ? "2" : "1",
      PreferredAirlines: null,
      Segments: [
        {
          Origin: data.from,
          Destination: data.to,
          FlightCabinClass: "1",
          PreferredDepartureTime: data.departureDate + "T00:00:00",
          PreferredArrivalTime: data.departureDate + "T00:00:00",
        },
        {
          Origin: data.to,
          Destination: data.from,
          FlightCabinClass: "1",
          PreferredDepartureTime: data.returnDate + "T00:00:00",
          PreferredArrivalTime: data.returnDate + "T00:00:00",
        },
      ],
      Sources: null,
    };

    const requestObject = data.isRoundTrip
      ? twoWayRequestData
      : oneWayRequestData;


    console.log("Search Request" + JSON.stringify(requestObject));


    const sendRequest = async () => {
      const response = await fetch("http://localhost:3000/api/searchResult", {
        method: "POST",
        body: JSON.stringify(requestObject),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Sending flight request fails");
      }
      const responseData = await response.json();
      return responseData;
    };

    try {
      const responseData = await sendRequest();

      console.log("Response from search data : " + JSON.stringify(responseData));

      if (responseData.Response.ResponseStatus !== 1) {
        dispatch(flightAction.setIsSearching(false));
        alert(responseData.Response.Error.ErrorMessage);
        return;
      }

      
      dispatch(searchResultActions.setIsResultAvaiable(true));
      dispatch(searchResultActions.setTraceId(responseData.Response.TraceId));
      dispatch(searchResultActions.setIsRoundTrip(data.isRoundTrip));

      const oneWayData = responseData.Response.Results[0].map((flight) => {
        return {
          id: flight.ResultIndex,
          companyName: flight.Segments[0][0].Airline.AirlineName,
          departureDate: flight.Segments[0][0].Origin.DepTime,
          arrivalTime: flight.Segments[0][0].Destination.ArrTime,
          fare: flight.Fare.PublishedFare,
          isLcc: flight.IsLCC,
        };
      });

      if (data.isRoundTrip === true && responseData.Response.Results[1] !== undefined) {
        const twoWayData = responseData.Response.Results[1].map((flight) => {
          return {
            id: flight.ResultIndex,
            companyName: flight.Segments[0][0].Airline.AirlineName,
            departureDate: flight.Segments[0][0].Origin.DepTime,
            arrivalTime: flight.Segments[0][0].Destination.ArrTime,
            fare: flight.Fare.PublishedFare,
            isLcc: flight.IsLCC,
          };
        });
        dispatch(searchResultActions.setOneWayData(oneWayData));
        dispatch(searchResultActions.setTwoWayData(twoWayData));
      } else {
        dispatch(searchResultActions.setOneWayData(oneWayData));
      }
    } catch (error) {
      alert("Error occur will submitting request, please try after sometime");
    }

    dispatch(flightAction.setIsSearching(false));
  };
};
