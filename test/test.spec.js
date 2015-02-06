var app = require("./../app.js");
var request = require("supertest").agent(app.listen());
var should = require("should");
var co = require("co");

describe("Koa simple server", function(){
    it("should render index page", function(done){
        request
            .get("/")
            .expect("content-type", /html/)
            .expect(200, done);
    });
});