const request = require("supertest");
const app = require("../src/app");

describe("GET /planets", function () {
    it("responds with json", function (done) {
        request(app)
            .get("/planets")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});

describe("GET /launches", function () {
    it("responds with json", function (done) {
        request(app)
            .get("/launches")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});

describe("POST /launches", function () {
    it("responds with json", function (done) {
        request(app)
            .post("/launches")
            .send({
                mission: "Exploration kepler-x",
                rocket: "Explorer",
                launchDate: "27 December, 2030",
                target: "kepler",
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});

describe("DELETE /launches/:id", function () {
    it("responds with json", function (done) {
        request(app)
            .delete("/launches/100")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});
