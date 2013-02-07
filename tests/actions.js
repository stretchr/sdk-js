var testCallback = function(){}

buster.testCase("Actions", {

	"read": function() {

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		assert.equals(r.read(testCallback), r, "Method should chain")

		assert.equals(r.onCompleted, testCallback, "callback should be set")
		assert.equals(r._method, "GET")
		assert.equals(goCalledWithReq, r, ".go should be called")

	},

	"create": function() {

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		assert.equals(r.create(testCallback), r, "Method should chain")

		assert.equals(r.onCompleted, testCallback, "callback should be set")
		assert.equals(r._params["~method"][0], "POST")
		assert.equals(goCalledWithReq, r, ".go should be called")

	},

	"update": function() {

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people/123")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		assert.equals(r.update(testCallback), r, "Method should chain")

		assert.equals(r.onCompleted, testCallback, "callback should be set")
		assert.equals(r._params["~method"][0], "PUT")
		assert.equals(goCalledWithReq, r, ".go should be called")

	},

	"replace": function() {

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people/123")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		assert.equals(r.replace(testCallback), r, "Method should chain")

		assert.equals(r.onCompleted, testCallback, "callback should be set")
		assert.equals(r._params["~method"][0], "POST")
		assert.equals(goCalledWithReq, r, ".go should be called")

	},

	"delete": function() {

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people/123")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		assert.equals(r.remove(testCallback), r, "Method should chain")

		assert.equals(r.onCompleted, testCallback, "callback should be set")
		assert.equals(r._params["~method"][0], "DELETE")
		assert.equals(goCalledWithReq, r, ".go should be called")

	}

});