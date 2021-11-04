import {passengerActions} from './passengerSlice';
import {flightBookingActions} from './flightBooking';
import {updateCredit} from './creditHandler';
import {creditActions} from './creditSlice';
 
export const passengerInitialSetter = (data) => {
    return (dispatch) => {
        let count = 0;
        const fareQuoteData = data;
        dispatch(passengerActions.emptyTravellerArray());
        dispatch(passengerActions.emptyPassengerTypeArray());
    
        for(let i = 0; i < 3; i++) {
            if(fareQuoteData.Response.Results.FareBreakdown[i] !== undefined) 
                count = count + fareQuoteData.Response.Results.FareBreakdown[i].PassengerCount;
        }

        for (let i = 0; i < fareQuoteData.Response.Results.FareBreakdown.length; i++) {
            for (let j = 0; j < fareQuoteData.Response.Results.FareBreakdown[i].PassengerCount; j++) {
                switch (fareQuoteData.Response.Results.FareBreakdown[i].PassengerType) {
                    case 1:
                        dispatch(passengerActions.setPassengerType("Adult"));
                        break;
                    case 2:
                        dispatch(passengerActions.setPassengerType("Children"));
                        break;
                    case 3:
                        dispatch(passengerActions.setPassengerType("Infant"));
                        break;
                }
            }
        }
        for (let i = 0; i < count; i++) {
            dispatch(passengerActions.setTravellers({ designation: '', firstName: '', lastName: '', gender: '', dob: '' }))
        }
    }
}

export const reversingSeat = (infoData) => {

    return async (dispatch) => {

        let myCredit  = 0;
        console.log("PublishFare : " + infoData.publishFare)
        const fetchCreditData = async () => { 
            console.log("I am here");
            const response = await fetch('http://localhost:3000/api/credit', {
                headers: {
                    'x-access-token': localStorage.getItem('accessToken')
                }
            });
            if(!response.ok) {
                alert("Fail in fetching credit of the user");
                dispatch(passengerActions.setIsProceedToBook(false))
                return;
            }
            const responseData = await response.json();
            if(responseData.status !== 1) {
                alert("User not authenticate");
                dispatch(passengerActions.setIsProceedToBook(false))
                return;
            }
            return responseData;
        }
        
        
        const creditData = await fetchCreditData();

        if(creditData !== undefined) {
            if(creditData.credit < infoData.publishFare) {
                alert('Your credits are less than the publishfare, please contact the admin to increase the credit');
                dispatch(passengerActions.setIsProceedToBook(false))
                return;
            } else {
                myCredit = creditData.credit;
            }
        } else {
            alert('User not authenticate');
            dispatch(passengerActions.setIsProceedToBook(false))
            return;
        }

        console.log("I am here 2");


        const fareQuoteOneWay = infoData.fareQuoteOneWay;
        let passengerCount = 0;
        for (let i = 0; i < 3; i++) {
            if (fareQuoteOneWay.Response.Results.FareBreakdown[i] !== undefined)
                passengerCount = passengerCount + fareQuoteOneWay.Response.Results.FareBreakdown[i].PassengerCount;
        }
        const passenger = [];
        let data = {};
        let count = 0;
        for (let i = 0; i < fareQuoteOneWay.Response.Results.FareBreakdown.length; i++) {
            for (let j = 0; j < fareQuoteOneWay.Response.Results.FareBreakdown[i].PassengerCount; j++) {
                data = {
                    Title: infoData.travellers[count].designation,
                    FirstName: infoData.travellers[count].firstName,
                    LastName: infoData.travellers[count].lastName,
                    DateOfBirth: infoData.travellers[count].dob + "T00:00:00",
                    Gender: infoData.travellers[count].gender,
                    PassportNo: infoData.travellers[count].passportNo !== undefined? infoData.travellers[count].passportNo : "",
                    PassportExpiry: infoData.travellers[count].passportExpiry !== undefined? infoData.travellers[count].passportExpiry + "T00:00:00": "",
                    AddressLine1: infoData.address,
                    AddressLine2: "",
                    Fare: {
                        Currency: fareQuoteOneWay.Response.Results.FareBreakdown[i].Currency,
                        BaseFare: fareQuoteOneWay.Response.Results.FareBreakdown[i].BaseFare / fareQuoteOneWay.Response.Results.FareBreakdown[i].PassengerCount,
                        Tax: fareQuoteOneWay.Response.Results.FareBreakdown[i].Tax / fareQuoteOneWay.Response.Results.FareBreakdown[i].PassengerCount,
                        YQTax: fareQuoteOneWay.Response.Results.FareBreakdown[i].YQTax / fareQuoteOneWay.Response.Results.FareBreakdown[i].PassengerCount,
                        AdditionalTxnFeePub: fareQuoteOneWay.Response.Results.FareBreakdown[i].AdditionalTxnFeePub / fareQuoteOneWay.Response.Results.FareBreakdown[i].PassengerCount,
                        AdditionalTxnFeeOfrd: fareQuoteOneWay.Response.Results.FareBreakdown[i].AdditionalTxnFeeOfrd / fareQuoteOneWay.Response.Results.FareBreakdown[i].PassengerCount,
                        OtherCharges: fareQuoteOneWay.Response.Results.Fare.OtherCharges,
                        Discount: fareQuoteOneWay.Response.Results.Fare.Discount,
                        PublishedFare: fareQuoteOneWay.Response.Results.Fare.PublishedFare,
                        OfferedFare: fareQuoteOneWay.Response.Results.Fare.OfferedFare,
                        TdsOnCommission: fareQuoteOneWay.Response.Results.Fare.TdsOnCommission,
                        TdsOnPLB: fareQuoteOneWay.Response.Results.Fare.TdsOnPLB,
                        TdsOnIncentive: fareQuoteOneWay.Response.Results.Fare.TdsOnIncentive,
                        ServiceFee: fareQuoteOneWay.Response.Results.Fare.ServiceFee,
                        AirTransFee: fareQuoteOneWay.Response.Results.Fare.AirTransFee ? fareQuoteOneWay.Response.Results.Fare.AirTransFee : 0,
                        TransactionFee: fareQuoteOneWay.Response.Results.Fare.TransactionFee ? fareQuoteOneWay.Response.Results.Fare.TransactionFee : 0
                    },
                    City: fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.CityName,
                    CountryCode: fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.CountryCode,
                    CountryName: fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.CountryName,
                    CellCountryCode: "+91",
                    ContactNo: infoData.phoneNumber,
                    Nationality: "IN",
                    Email: infoData.email
                }
                if (count === 0) {
                    data.IsLeadPax = true;
                } else {
                    data.IsLeadPax = false;
                }
                switch (infoData.passengerType[count]) {
                    case "Adult":
                        data.PaxType = 1;
                        break;
                    case "Children":
                        data.PaxType = 2;
                        break;
                    case "Infant":
                        data.PaxType = 3;
                        break;
                }
                if (infoData.isGSTChecked) {
                    data.GSTCompanyAddress = "";
                    data.GSTCompanyContactNumber = null;
                    data.GSTCompanyName = infoData.companyName;
                    data.GSTNumber = infoData.gstNumber;
                    data.GSTCompanyEmail = infoData.companyGstEmail;
                }
                count++;
                passenger.push(data);
            }
        }

        const requestObject = {
            EndUserIp: "192.168.11.120",
            TraceId: fareQuoteOneWay.Response.TraceId,
            ResultIndex: fareQuoteOneWay.Response.Results.ResultIndex,
            Passengers: [...passenger]
        }

        console.log("Request for for LCC ticket" + JSON.stringify(requestObject));


        if (fareQuoteOneWay.Response.Results.IsLCC) {

            fetch('http://localhost:3000/api/ticket/lcc', {
                method: 'POST',
                body: JSON.stringify(requestObject),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('accessToken')
                }
            })
            .then(res => res.json())
                .then(responseData => {

                    console.log("LCC Response Data First Way : " + JSON.stringify(responseData));

                    if(responseData.Response.ResponseStatus !== 1) {
                        alert(responseData.Response.Error.ErrorMessage);
                        dispatch(passengerActions.setIsProceedToBook(false))
                        return;
                    }

                    dispatch(flightBookingActions.setOneWayticketInfo(responseData));
                    
                    const dbRequestObject = {
                        pnr: responseData.Response.Response.PNR,
                        bookingId: responseData.Response.Response.BookingId,
                        traceId: responseData.Response.TraceId,
                        isLcc: true,
                        isTicketDone: true,
                        from: fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.CityName,
                        to: fareQuoteOneWay.Response.Results.Segments[0][0].Destination.Airport.CityName,
                        publishFare: fareQuoteOneWay.Response.Results.Fare.PublishedFare,
                        firstName: infoData.travellers[0].firstName,
                        lastName: infoData.travellers[0].lastName,
                        appliedForCancellation: false,
                        cancellationType: 0,
                        changeRequestId: {}
                    }
                    console.log("Fucking hell");
                    console.log(dbRequestObject);


                    fetch('http://localhost:3000/api/create/ticket', {
                        method: 'POST',
                        body: JSON.stringify(dbRequestObject),
                        headers: {
                            'Content-Type': 'application/json',
                            'x-access-token': localStorage.getItem('accessToken')
                        }
                    }).then(res => res.json())
                    .then(dbData => {
                        
                        dispatch(updateCredit({
                            secret: "1234",
                            credit: myCredit - infoData.publishFare
                        }));

                        dispatch(creditActions.setCredit(myCredit - infoData.publishFare));
                        
                    });

                }).catch(err => {
                    dispatch(passengerActions.setIsProceedToBook(false));
                    alert("Error occur while booking the ticket");
                    return;
                })
        } else {

            fetch('http://localhost:3000/api/book', {
                method: 'POST',
                body: JSON.stringify(requestObject),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('accessToken')
                }
            }).then(res => res.json())
                .then(responseData => {

                    console.log("Booking Data Response First Way : " + JSON.stringify(responseData));

                    if(responseData.Response.ResponseStatus !== 1) {
                        alert(responseData.Response.Error.ErrorMessage);
                        dispatch(passengerActions.setIsProceedToBook(false))
                        return;
                    }

                    dispatch(flightBookingActions.setOneWayticketInfo(responseData));
                    

                    const dbRequestObject = {
                        pnr: responseData.Response.Response.PNR,
                        bookingId: responseData.Response.Response.BookingId,
                        traceId: responseData.Response.TraceId,
                        isLcc: false,
                        isTicketDone: false,
                        from: fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.CityName,
                        to: fareQuoteOneWay.Response.Results.Segments[0][0].Destination.Airport.CityName,
                        publishFare: fareQuoteOneWay.Response.Results.Fare.PublishedFare,
                        firstName: infoData.travellers[0].firstName,
                        lastName: infoData.travellers[0].lastName,
                        appliedForCancellation: false,
                        cancellationType: 0,
                        changeRequestId: {}
                    }

                    console.log(dbRequestObject);

                    fetch('http://localhost:3000/api/create/ticket', {
                        method: 'POST',
                        body: JSON.stringify(dbRequestObject),
                        headers: {
                            'Content-Type': 'application/json',
                            'x-access-token': localStorage.getItem('accessToken')
                        }
                    }).then(res => res.json())
                    .then(dbData => {
                        // dispatch(passengerActions.setIsProceedToBook(false))
                        // props.getTicketData(dbRequestObject);
                    })

                }).catch(err => {
                    dispatch(passengerActions.setIsProceedToBook(false));
                    alert("Error occur while booking the ticket");
                    return;
                });
        }

        if(infoData.isRoundTrip) {
            const fareQuoteSecondWay = infoData.fareQuoteSecondWay;
            let passengerCount = 0;
            for (let i = 0; i < 3; i++) {
                if (fareQuoteSecondWay.Response.Results.FareBreakdown[i] !== undefined)
                    passengerCount = passengerCount + fareQuoteSecondWay.Response.Results.FareBreakdown[i].PassengerCount;
            }
            const passenger = [];
            let data = {};
            let count = 0;
            for (let i = 0; i < fareQuoteSecondWay.Response.Results.FareBreakdown.length; i++) {
                for (let j = 0; j < fareQuoteSecondWay.Response.Results.FareBreakdown[i].PassengerCount; j++) {
                    data = {
                        Title: infoData.travellers[count].designation,
                        FirstName: infoData.travellers[count].firstName,
                        LastName: infoData.travellers[count].lastName,
                        DateOfBirth: infoData.travellers[count].dob + "T00:00:00",
                        Gender: infoData.travellers[count].gender,
                        PassportNo: infoData.travellers[count].passportNo !== undefined? infoData.travellers[count].passportNo : "",
                        PassportExpiry: infoData.travellers[count].passportExpiry !== undefined? infoData.travellers[count].passportExpiry + "T00:00:00": "",
                        AddressLine1: infoData.address,
                        AddressLine2: "",
                        Fare: {
                            Currency: fareQuoteSecondWay.Response.Results.FareBreakdown[i].Currency,
                            BaseFare: fareQuoteSecondWay.Response.Results.FareBreakdown[i].BaseFare / fareQuoteSecondWay.Response.Results.FareBreakdown[i].PassengerCount,
                            Tax: fareQuoteSecondWay.Response.Results.FareBreakdown[i].Tax / fareQuoteSecondWay.Response.Results.FareBreakdown[i].PassengerCount,
                            YQTax: fareQuoteSecondWay.Response.Results.FareBreakdown[i].YQTax / fareQuoteSecondWay.Response.Results.FareBreakdown[i].PassengerCount,
                            AdditionalTxnFeePub: fareQuoteSecondWay.Response.Results.FareBreakdown[i].AdditionalTxnFeePub / fareQuoteSecondWay.Response.Results.FareBreakdown[i].PassengerCount,
                            AdditionalTxnFeeOfrd: fareQuoteSecondWay.Response.Results.FareBreakdown[i].AdditionalTxnFeeOfrd / fareQuoteSecondWay.Response.Results.FareBreakdown[i].PassengerCount,
                            OtherCharges: fareQuoteSecondWay.Response.Results.Fare.OtherCharges,
                            Discount: fareQuoteSecondWay.Response.Results.Fare.Discount,
                            PublishedFare: fareQuoteSecondWay.Response.Results.Fare.PublishedFare,
                            OfferedFare: fareQuoteSecondWay.Response.Results.Fare.OfferedFare,
                            TdsOnCommission: fareQuoteSecondWay.Response.Results.Fare.TdsOnCommission,
                            TdsOnPLB: fareQuoteSecondWay.Response.Results.Fare.TdsOnPLB,
                            TdsOnIncentive: fareQuoteSecondWay.Response.Results.Fare.TdsOnIncentive,
                            ServiceFee: fareQuoteSecondWay.Response.Results.Fare.ServiceFee,
                            AirTransFee: fareQuoteSecondWay.Response.Results.Fare.AirTransFee ? fareQuoteSecondWay.Response.Results.Fare.AirTransFee : 0,
                            TransactionFee: fareQuoteSecondWay.Response.Results.Fare.TransactionFee ? fareQuoteSecondWay.Response.Results.Fare.TransactionFee : 0
                        },
                        City: fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.CityName,
                        CountryCode: fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.CountryCode,
                        CountryName: fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.CountryName,
                        CellCountryCode: "+91",
                        ContactNo: infoData.phoneNumber,
                        Nationality: "IN",
                        Email: infoData.email
                    }
                    if (count === 0) {
                        data.IsLeadPax = true;
                    } else {
                        data.IsLeadPax = false;
                    }
                    switch (infoData.passengerType[count]) {
                        case "Adult":
                            data.PaxType = 1;
                            break;
                        case "Children":
                            data.PaxType = 2;
                            break;
                        case "Infant":
                            data.PaxType = 3;
                            break;
                    }
                    if (infoData.isGSTChecked) {
                        data.GSTCompanyAddress = "";
                        data.GSTCompanyContactNumber = null;
                        data.GSTCompanyName = infoData.companyName;
                        data.GSTNumber = infoData.gstNumber;
                        data.GSTCompanyEmail = infoData.companyGstEmail;
                    }
                    count++;
                    passenger.push(data);
                }
            }

            const requestObject = {
                EndUserIp: "192.168.11.120",
                TraceId: fareQuoteSecondWay.Response.TraceId,
                ResultIndex: fareQuoteSecondWay.Response.Results.ResultIndex,
                Passengers: [...passenger]
            }

            console.log("Request Data from Second Way : " + JSON.stringify(requestObject));

            if (fareQuoteSecondWay.Response.Results.IsLCC) {
                fetch('http://localhost:3000/api/ticket/lcc', {
                    method: 'POST',
                    body: JSON.stringify(requestObject),
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': localStorage.getItem('accessToken')
                    }
                })
                .then(res => res.json())
                    .then(responseData => {

                        console.log("Response Data from Second Way : " + JSON.stringify(responseData));

                        if(responseData.Response.ResponseStatus !== 1) {
                            alert(responseData.Response.Error.ErrorMessage);
                            dispatch(passengerActions.setIsProceedToBook(false))
                            return;
                        }

                        dispatch(flightBookingActions.setSecondWayTicketInfo(responseData));
                        console.log("LCC ticket DAta : " + JSON.stringify(responseData));
                        
                        const dbRequestObject = {
                            pnr: responseData.Response.Response.PNR,
                            bookingId: responseData.Response.Response.BookingId,
                            traceId: responseData.Response.TraceId,
                            isLcc: true,
                            isTicketDone: true,
                            from: fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.CityName,
                            to: fareQuoteSecondWay.Response.Results.Segments[0][0].Destination.Airport.CityName,
                            publishFare: fareQuoteSecondWay.Response.Results.Fare.PublishedFare,
                            firstName: infoData.travellers[0].firstName,
                            lastName: infoData.travellers[0].lastName,
                            appliedForCancellation: false,
                            cancellationType: 0,
                            changeRequestId: {}
                        }
                        fetch('http://localhost:3000/api/create/ticket', {
                            method: 'POST',
                            body: JSON.stringify(dbRequestObject),
                            headers: {
                                'Content-Type': 'application/json',
                                'x-access-token': localStorage.getItem('accessToken')
                            }
                        }).then(res => res.json())
                        .then(dbData => {
                            dispatch(passengerActions.setIsProceedToBook(false))
                        });

                    }).catch(err => {
                        dispatch(passengerActions.setIsProceedToBook(false));
                        alert("Error occur while booking the ticket");
                        return;
                    })
            } else {

                fetch('http://localhost:3000/api/book', {
                    method: 'POST',
                    body: JSON.stringify(requestObject),
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': localStorage.getItem('accessToken')
                    }
                }).then(res => res.json())
                    .then(responseData => {

                        console.log("Booking Response SEcond way " + JSON.stringify(responseData));

                        if(responseData.Response.ResponseStatus !== 1) {
                            alert(responseData.Response.Error.ErrorMessage);
                            dispatch(passengerActions.setIsProceedToBook(false))
                            return;
                        }

                        console.log("Booking DAta : " + JSON.stringify(responseData));
                        dispatch(flightBookingActions.setSecondWayTicketInfo(responseData));

                        const dbRequestObject = {
                            pnr: responseData.Response.Response.PNR,
                            bookingId: responseData.Response.Response.BookingId,
                            traceId: responseData.Response.TraceId,
                            isLcc: false,
                            isTicketDone: false,
                            from: fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.CityName,
                            to: fareQuoteSecondWay.Response.Results.Segments[0][0].Destination.Airport.CityName,
                            publishFare: fareQuoteSecondWay.Response.Results.Fare.PublishedFare,
                            firstName: infoData.travellers[0].firstName,
                            lastName: infoData.travellers[0].lastName,
                            appliedForCancellation: false,
                            cancellationType: 0,
                            changeRequestId: {}
                        }

                        fetch('http://localhost:3000/api/create/ticket', {
                            method: 'POST',
                            body: JSON.stringify(dbRequestObject),
                            headers: {
                                'Content-Type': 'application/json',
                                'x-access-token': localStorage.getItem('accessToken')
                            }
                        }).then(res => res.json())
                        .then(dbData => {
                            dispatch(passengerActions.setIsProceedToBook(false))
                            // props.getTicketData(dbRequestObject);
                        })

                    }).catch(err => {
                        dispatch(passengerActions.setIsProceedToBook(false));
                        alert("Error occur while booking the ticket");
                        return;
                    });
            }
        }

    }
}