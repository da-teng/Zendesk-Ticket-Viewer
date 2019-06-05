import React from "react";
import TicketListContainer from "./containers/TicketListContainer";
import TicketContainer from "./containers/TicketContainer";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={TicketListContainer} />
      <Route exact path="/:page/:ticketId" component={TicketContainer} />
      <Route exact path="/:page" component={TicketListContainer} />
    </Router>
  );
};

export default App;
