import React from "react";
import PropTypes from "prop-types";

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

Ticket.propTypes = {
  date: PropTypes.string,
  status: PropTypes.string,
  subject: PropTypes.string,
  description: PropTypes.string
};
export default Ticket;
