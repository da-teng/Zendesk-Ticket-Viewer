import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
const Ticket = props => {
  return (
    <div className="ticket">
      <div className="ticket__header">Your Ticket Details</div>
      <div className="ticket__date">
        Created{" "}
        {moment(props.date)
          .startOf("month")
          .from()}
      </div>
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
