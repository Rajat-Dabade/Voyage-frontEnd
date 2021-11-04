import {myBookingActions} from './myBookingSlice';

export const myFlightBooking = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response  = await fetch('http://localhost:3000/api/ticket/allTicket',{
                headers: {
                    'x-access-token': localStorage.getItem('accessToken')
                }
            });

            if(!response.ok) {
                alert('Can able to fetch the data please relogin and fetch it');
                localStorage.clear();
                window.location.href = "http://localhost:3001/";
                return;
            }

            const responseData = await response.json();
            if(responseData.status === 0) {
                alert(responseData.message);
                window.location.href = "http://localhost:3001/";
                return;
            }

            return responseData;
        }

        const responseDataFromDb = await sendRequest();
        console.log("This is reposne " +  JSON.stringify(responseDataFromDb));
        dispatch(myBookingActions.setMyFlightBoookings(responseDataFromDb.data));
        dispatch(myBookingActions.setBackDrop(false));
    }
}