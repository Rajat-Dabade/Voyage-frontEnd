import { flightBookingDetailsActions } from "./flightBookingDetailsSlice";

export const flightBookingDetailsHandler = (data, history) => {
    return async (dispatch) => {

        const sendRequest = async (requestObject) => {
            const response  = await fetch('http://localhost:3000/api/booking/details',{
                method: 'POST',
                body: JSON.stringify(requestObject),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('accessToken')
                }
            });

            const responseData = await response.json();

            console.log(responseData);

            if(responseData.Response.ResponseStatus !== 1) {
                alert(responseData.Response.Error.ErrorMessage);
                history.push('/mybooking');
                return;   
            }

            return responseData;

        }

        const requestObject = {
            EndUserIp: "192.168.11.120",
            BookingId: data.bookingId,
            PNR: data.pnr,
        }

        const responseData = await sendRequest(requestObject);

        if(responseData !== undefined) {
            dispatch(flightBookingDetailsActions.setFlightBookingDetails(responseData));
        }

    }
}