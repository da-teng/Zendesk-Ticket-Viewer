const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Tickets", () => {
  describe("GET /tickets/:page", () => {
    it("should get all tickets", done => {
      chai
        .request(app)
        .get("/tickets/page=1/")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it("should get ticket details", done => {
      chai
        .request(app)
        .get("/tickets/page=1/5")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it("should return error", done => {
      chai
        .request(app)
        .get("/tickets/page=1/200")
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
