import React, { Component } from "react";
import Ticket from "../components/Ticket";
import Error from "../components/Error";
import axios from "axios";
class TicketContainer extends Component {
  state = {
    ticket: "",
    error: ""
  };
  componentDidMount() {
    const { page, ticketId } = this.props.match.params;
    axios
      .get(`/tickets/${page}/${ticketId}`)
      .then(res => {
        const ticket = res.data.ticket;
        this.setState({ ticket });
      })
      .catch(error => {
        this.setState({ error: error.message });
        console.log(error.message);
      });
  }
  render() {
    const { ticket } = this.state;
    return this.state.error ? (
      <Error message={this.state.error} />
    ) : (
      <Ticket
        date={ticket.created_at}
        status={ticket.status}
        subject={ticket.subject}
        description={ticket.description}
      />
    );
  }
}

export default TicketContainer;
