import React, { Component } from "react";
import axios from "axios";
import TicketList from "../components/TicketList";
import Pagination from "../components/Pagination";
import Error from "../components/Error";
class TicketListContainer extends Component {
  state = {
    tickets: [],
    pages: [],
    error: ""
  };

  componentDidMount() {
    this.fetchTickets(1);
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props.match.params;
    if (prevProps.match.params.page !== page) {
      if (page) {
        this.fetchTickets(page);
      } else {
        this.fetchTickets("page = 1");
      }
    }
  }

  fetchTickets = page => {
    axios
      .get(`/tickets/${page}`)
      .then(res => {
        const tickets = res.data.tickets;
        const count = res.data.count;
        this.setState({ tickets });
        this.setPageCount(count);
      })
      .catch(error => {
        this.setState({ error: error.message });
        console.log(error.message);
      });
  };

  setPageCount = count => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(count / 25); i++) {
      pages.push(i);
    }
    console.log(pages);
    this.setState({ pages });
  };

  render() {
    let { page } = this.props.match.params;
    if (typeof page === "undefined") {
      page = "page=1";
    }
    console.log(this.state.tickets);
    return this.state.error ? (
      <Error message={this.state.error} />
    ) : (
      <div className="TicketList__container">
        <TicketList tickets={this.state.tickets} page={page} />
        <Pagination pages={this.state.pages} />
      </div>
    );
  }
}

export default TicketListContainer;
