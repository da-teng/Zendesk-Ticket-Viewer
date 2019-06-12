const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const path = require("path");
const port = process.env.PORT || 5000;
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
app.get("/tickets/:page/:ticketId", (req, res) => {
  console.log("haha");
  console.log(req.params.ticketId);
  axios
    .get(
      `https://datickethelp.zendesk.com/api/v2/tickets/${
        req.params.ticketId
      }.json`,
      {
        headers: {
          Authorization: "Basic (anVuZXRoZGFAZ21haWwuY29tOjE5OTVybWl0)"
        }
      }
    )
    .then(response => {
      let json = response.data;
      res.setHeader("Content-Type", "application/json");
      res.status("200");
      res.send(json);
    })
    .catch(error => {
      res.status("404");
      res.send(error);
    });
});

app.get("/tickets/:page", (req, res) => {
  console.log("Page is " + req.params.page);
  axios
    .get(
      `https://datickethelp.zendesk.com/api/v2/tickets.json?per_page=25&${
        req.params.page
      }`,
      {
        headers: {
          Authorization: "Basic (anVuZXRoZGFAZ21haWwuY29tOjE5OTVybWl0)"
        }
      }
    )
    .then(response => {
      let json = response.data;
      res.setHeader("Content-Type", "application/json");
      res.status("200");
      res.send(json);
    })
    .catch(error => {
      res.status("404");
      res.send(error);
    });
});

app.listen(port, () => {
  console.log("Node server is running..");
});

module.exports = app;
