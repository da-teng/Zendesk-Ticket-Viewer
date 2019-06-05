import React from "react";

const Ticket = props => {
  return (
    <div className="ticket">
      <div className="ticket__header">Your Ticket Details</div>
      <div className="ticket__date">{props.date}</div>
      <div className="ticket__status">Status: {props.status}</div>
      <div className="ticket__subject">{props.subject}</div>
      <div className="ticket__description">{props.description}</div>
    </div>
  );
};

export default Ticket;
