import { cancellationActions } from "./cancellationSlice";

export const fullCancellationHandler = (
  bookingId,
  ticketId,
  setIsFullCancelling
) => {
  return async (dispatch) => {
    const sendRequest = async (requestObject) => {
      const response = await fetch(
        "http://localhost:3000/api/cancel/sendChangeRequest",
        {
          method: "POST",
          body: JSON.stringify(requestObject),
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("accessToken"),
          },
        }
      );

      if (!response.ok) {
        setIsFullCancelling(false);
        alert("Error from the API side, please contact Admin");
        return;
      }

      const responseData = await response.json();

      console.log(
        "Response for change request " + JSON.stringify(responseData)
      );

      if (responseData.Response.ResponseStatus !== 1) {
        setIsFullCancelling(false);
        alert(responseData.Response.Error.ErrorMessage);
        return;
      }

      return responseData;
    };

    const requestObject = {
      BookingId: bookingId,
      RequestType: 1,
      CancellationType: 2,
      Remarks: "Change my mind",
      EndUserIp: "192.168.10.36",
    };

    const responseData = await sendRequest(requestObject);

    console.log("responseDAta Rajat: " + JSON.stringify(responseData));

    if (responseData !== undefined) {
      const updateUserticket = async (requestDbObject) => {
        const response = await fetch(
          "http://localhost:3000/api/cancel/dbupdate",
          {
            method: "PUT",
            body: JSON.stringify(requestDbObject),
            headers: {
              "Content-Type": "application/json",
              "x-access-token": localStorage.getItem("accessToken"),
            },
          }
        );

        if (!response.ok) {
          setIsFullCancelling(false);
          alert("Error from db side");
          return;
        }

        const responseDbData = await response.json();

        if (responseDbData.status === 0) {
          setIsFullCancelling(false);
          alert(responseDbData.message);
          return;
        }

        return responseDbData;
      };

      const requestDbObject = {
        cancellationType: 1,
        ticketId,
        changeRequestId: JSON.stringify(responseData.Response.TicketCRInfo),
      };

      console.log("Request OBject" + JSON.stringify(requestDbObject));
      const responseDbData = await updateUserticket(requestDbObject);

      if (responseDbData !== undefined) {
        if (responseDbData.status === 1) {
          setIsFullCancelling(false);
          alert(responseDbData.message);
          window.location.href = "http://localhost:3001";
        }
      }
    }
  };
};

export const releasePnrHandler = (bookingId, setReleasePnrBtn) => {
  return async (dispatch) => {
    const sendRequest = async (requestObject) => {
      const response = await fetch(
        "http://localhost:3000/api/cancel/releasePnrRequest",
        {
          method: "POST",
          body: JSON.stringify(requestObject),
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("accessToken"),
          },
        }
      );

      if (!response.ok) {
        setReleasePnrBtn(false);
        alert("Error from database side, Please try after some time");
        return;
      }

      const responseData = await response.json();

      if (responseData.Response.ResponseStatus !== 1) {
        setReleasePnrBtn(false);
        alert(responseData.Response.Error.ErrorMessage);
        return;
      }

      return responseData;
    };

    const requestObject = {
      EndUserIp: "192.168.10.36",
      BookingId: bookingId,
      Source: "4",
    };

    const responseData = await sendRequest(requestObject);

    if (responseData !== undefined) {
      const updateUserticket = async (requestDbObject) => {
        const response = await fetch(
          "http://localhost:3000/api/cancel/dbupdate",
          {
            method: "PUT",
            body: JSON.stringify(requestDbObject),
            headers: {
              "Content-Type": "application/json",
              "x-access-token": localStorage.getItem("accessToken"),
            },
          }
        );

        if (!response.ok) {
          setReleasePnrBtn(false);
          alert("Error from db side");
          return;
        }

        const responseDbData = await response.json();

        if (responseDbData.status === 0) {
          setReleasePnrBtn(false);
          alert(responseDbData.message);
          return;
        }

        return responseDbData;
      };

      const requestDbObject = {
        cancellationType: 4,
      };
      const responseDbData = await updateUserticket(requestDbObject);

      if (responseDbData !== undefined) {
        if (responseDbData.status === 1) {
          setReleasePnrBtn(false);
          alert(responseDbData.message);
          window.location.href = "http://localhost:3000";
        }
      }
    }
  };
};

export const showCancellationStatus = (
  data,
  history,
  setCancellationStatus
) => {
  return async (dispatch) => {
    const sendRequest = async (bookingId) => {
      const response = await fetch(
        `http://localhost:3000/api/ticket/${bookingId}`,
        {
          headers: {
            "x-access-token": localStorage.getItem("accessToken"),
          },
        }
      );

      if (!response.ok) {
        setCancellationStatus(false);
        alert("Error from dataside, please try after some time");
        return;
      }

      const responseData = await response.json();

      if (responseData.status !== undefined) {
        if (responseData.status == 0) {
          setCancellationStatus(false);
          alert(responseData.message);
          return;
        }
      }

      return responseData;
    };

    const responseData = await sendRequest(data.bookingId);
    console.log(responseData);
    if (responseData !== undefined) {
      dispatch(
        cancellationActions.setCancelledBooking(
          JSON.parse(responseData.changeRequestId)
        )
      );
      setCancellationStatus(false);
      history.push(`/cancellation/status/${data.pnr}/${data.bookingId}`);
    }
  };
};

export const cancellationStatus = (changeRequestId) => {
  return async (dispatch) => {
    const sendRequest = async (requestObject) => {
      const response = await fetch(
        "http://localhost:3000/api/getChangeRequestStatus",
        {
          method: "POST",
          body: JSON.stringify(requestObject),
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("accessToken"),
          },
        }
      );

      if (!response.ok) {
        alert("Error from the database side");
        return;
      }

      const responseData = await response.json();

      if (responseData.Response.ResponseStatus !== 1) {
        alert(response.Response.Error.ErrorMessage);
        return;
      }

      return responseData;
    };

    const requestObject = {
      ChangeRequestId: changeRequestId,
      EndUserIp: "192.168.11.58"
    };
    const responseData = await sendRequest(requestObject);
    if(responseData !== undefined) {
        dispatch(cancellationActions.setCancelledStatus(responseData));
    }
  };
};
