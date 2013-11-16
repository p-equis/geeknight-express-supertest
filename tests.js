var should = require("should")
  , request = require('supertest')
  , express = require('express')
  , main = require('./main');

describe("with supertest", function() {
	
	it("should return hello world", function(done) {
		request(main())
	      .get('/')
	      .expect(200, "Hello World1", done);
	});

});

describe("with hand-rolled mocks", function() {
	
	it("should return hello world", function() {
		var paths = {};
		var app = { 
			get: function(path, callback) {
				paths[path] = callback;
			}, 
			listen: function() {} 
		};
		var expressFactory = function() {
			return app;
		};
		main(expressFactory);

		var message;
		var response = { send: function(sentMessage) { message = sentMessage; } };

		paths["/"]({}, response)

		message.should.equal("Hello World1");
	});
	
})