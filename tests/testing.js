buster.testCase("Test Session", {

	"GetTestRequest & at": function(){

		var s = Stretchr.NewTestSession()
		var request = Stretchr.GetTestRequest(s, "path")

		assert.defined(request, "at should return new request")
		assert.equals(request._path, "path")
		assert.equals(request._session, s, "session")

		request = s.at("path")

		assert.defined(request, "at should return new request")
		assert.equals(request._path, "path")
		assert.equals(request._session, s, "session")

	},

	"Test activity": function(){

		Stretchr.ResponseDelay = 0;
		var s = Stretchr.NewTestSession()

		assert.defined(s, "NewTestSession")

		var responseObject1 = {}
		var responseObject2 = {}
		var responseObject3 = {}

		// set up some responses
		s.respond(responseObject1).respond(responseObject2).respond(responseObject3)

		assert.equals(s.responses.length, 3)

		var res1, res2, res3, res4, res5;

		// made some requests
		s.at("people").where("age", ">30").read(function(r){
			res1 = r;
		});
		s.at("people/123").create(function(r){
			res2 = r;
		});
		s.at("people").with("~limit", 5).remove(function(r){
			res3 = r;
		});
		s.at("people").update(function(r){
			res4 = r;
		});
		s.at("people").replace(function(r){
			res5 = r;
		});

		assert.equals(s.requests.length, 5)

		assert.equals(s.requests[0].action, "read")
		assert.equals(s.requests[0].path, "people")
		assert.equals(s.requests[0].where["age"][0], ">30")
		assert.equals(res1, responseObject1, "responseObject1")

		assert.equals(s.requests[1].action, "create")
		assert.equals(s.requests[1].path, "people/123")
		assert.equals(res2, responseObject2, "responseObject2")

		assert.equals(s.requests[2].action, "remove")
		assert.equals(s.requests[2].path, "people")
		assert.equals(s.requests[2].with["~limit"][0], 5)
		assert.equals(res3, responseObject3, "responseObject3")

		assert.equals(s.requests[3].action, "update")
		assert.equals(res4, Stretchr.TestResponse, "responseObject1")

		assert.equals(s.requests[4].action, "replace")
		assert.equals(res5, Stretchr.TestResponse, "responseObject1")

	}

});