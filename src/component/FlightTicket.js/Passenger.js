import React from 'react';

const Passenger = (props) => {
    return (
        <>
            <b>Passenger Name</b> : {props.passenger.FirstName} {" "} {props.passenger.LastName}<br></br><br></br>
            <b>DateOfBirth</b> : {props.passenger.DateOfBirth.substring(0, 10)}<br></br><br></br>
            <b>Gender</b> : {props.passenger.Gender === 1 ? "Male" : "Female"}<br></br><br></br>
            <b>Ticket Id :</b> {props.passenger.Ticket.TicketId}<br></br><br></br>
            <hr></hr>
        </>
    )
}

export default Passenger;