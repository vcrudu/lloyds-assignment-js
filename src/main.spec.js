const express = require("express");
const branches = require("./routes/branches");
const request = require("supertest");
const constants = require("./common/constants");
const assert = require('assert');

let app = express();

app.use(`/`, branches);

describe("GET branches", function() {
    it("responds with list of branches", function(done) {
        request(app)
        .get("/")
        .set("Accept", "application/json")
        .set(constants.LOCATION_HEADER, "London")
        .expect("Content-Type", /json/)
        .then(res => {
            assert(res._body[0].PostalAddress.TownName.toLowerCase(),"london")
            done();
        });
    });
});