import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

const TicketList = props => {
  console.log(props.page);
  return (
    <ul className="ticketItem">
      <div className="ticketItem__header">Mobile Ticket Viewer</div>
      {props.tickets.map(ticket => (
        <Link
          key={ticket.id}
          className="ticketItem__container"
          to={`/${props.page}/${ticket.id}`}
        >
          <li key={ticket.id}>
            <div className="ticketItem__date">
              Created{" "}
              {moment(ticket.created_at)
                .startOf("month")
                .from()}
            </div>
            <div className="ticketItem__subject">{ticket.subject}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

TicketList.propTypes = {
  page: PropTypes.string,
  tickets: PropTypes.array
};
export default TicketList;
