import {updateCredit} from './creditHandler';

export const generateTicket = (data, setGenerateTicketButton) => {
    return async (dispatch) => {
        let ticketPublicFare = 0;
        const getBookingTicketDetails = async () => {
            const requestData = {
                EndUserIp: "192.168.11.58",
                PNR: data.PNR,
                BookingId: data.BookingId
            }

            console.log("Request Data from Non LCC Flight : " + JSON.stringify(requestData));

            const response = await fetch('http://localhost:3000/api/booking/details', {
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('accessToken')
                }
            });
            if(!response.ok) {
                setGenerateTicketButton(false);
                alert("Cant able to fetch the ticket information");
                return;
            }
            const responseData = await response.json();
            if(responseData.Response.ResponseStatus !== 1) {
                setGenerateTicketButton(false);
                alert(responseData.Response.Error.ErrorMessage);
                return;
            }


            console.log("Response data for Ticket for NON LCC " + JSON.stringify(responseData));

            return responseData;
        }

        const ticketData = await getBookingTicketDetails();
        if(ticketData !== undefined) {
            ticketPublicFare = ticketData.Response.FlightItinerary.Fare.PublishedFare;
        } else {
            return;
        }




        let myCredit  = 0;
        const fetchCreditData = async () => { 
            console.log("I am here");
            const response = await fetch('http://localhost:3000/api/credit', {
                headers: {
                    'x-access-token': localStorage.getItem('accessToken')
                }
            });
            if(!response.ok) {
                setGenerateTicketButton(false);
                alert("Fail in fetching credit of the user");
                return;
            }
            const responseData = await response.json();
            if(responseData.status !== 1) {
                setGenerateTicketButton(false);
                alert("User not authenticate");
                return;
            }
            return responseData;
        }
        
        
        const creditData = await fetchCreditData();

        if(creditData !== undefined) {
            if(creditData.credit < ticketPublicFare) {
                setGenerateTicketButton(false);
                alert('Your credits are less than the publishfare, please contact the admin to increase the fare');
                return;
            } else {
                myCredit = creditData.credit;
            }
        } else {
            setGenerateTicketButton(false);
            alert('User not authenticate');
            return;
        }



        const requestData = {
            EndUserIp: "192.168.1.17",
            TraceId: data.TraceId,
            PNR: data.PNR,
            BookingId: data.BookingId,
        }
        const sendRequest = async () => {
            const response = await fetch('http://localhost:3000/api/ticket/nonLcc', {
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('accessToken')
                }
            });

            if(!response.ok) {
                setGenerateTicketButton(false);
                alert("Cant able to generate the ticket, please try after some time");
                return;
            }

            const responseData = await response.json();

            console.log("REsponse dAta" + JSON.stringify(responseData));

            if(responseData.status !== undefined) {
                if(responseData.status === 0) {
                    setGenerateTicketButton(false);
                    alert(responseData.message);
                    return;
                }
            }

            if(responseData.Response.ResponseStatus !== 1) {
                setGenerateTicketButton(false);
                alert(responseData.Response.Error.ErrorMessage);
                return;
            }
            return responseData;
        }

        try {
            const responseData = await sendRequest();
            console.log("Booking flight data" + JSON.stringify(responseData));

            if(responseData === undefined) {
                return;
            }

            const sendDbRequest = {
                PNR: responseData.Response.Response.PNR
            }

            console.log("SendDbRequest : " + JSON.stringify(sendDbRequest));

            const response = await fetch('http://localhost:3000/api/ticket/changeStatus', {
                method: 'POST',
                body: JSON.stringify(sendDbRequest),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('accessToken')
                }
            });

            const responseDbData = await response.json();

            dispatch(updateCredit({
                secret: "1234",
                credit: (myCredit - responseData.Response.Response.FlightItinerary.Fare.PublishedFare)
            }))
            

            alert("Ticket generated Successfully Please check the ticket in the MyBooking Section");
            console.log(responseDbData);
            if(responseDbData !== undefined) {
                console.log("Response DataBase Data : " + JSON.stringify(responseDbData));
            }
            window.location.href = "http://localhost:3001/";
        } catch(err) {

        }
    }
}