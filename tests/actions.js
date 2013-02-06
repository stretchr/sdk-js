buster.testCase("Actions", {

	"read": function() {

		var s = Stretchr.WithSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		r.read()

		assert.equals(r._method, "GET")
		assert.equals(goCalledWithReq, r, ".go should be called")

	},

	"create": function() {

		var s = Stretchr.WithSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		r.create()

		assert.equals(r._params["~method"][0], "POST")
		assert.equals(goCalledWithReq, r, ".go should be called")

	},

	"update": function() {

		var s = Stretchr.WithSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people/123")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		r.update()

		assert.equals(r._params["~method"][0], "PUT")
		assert.equals(goCalledWithReq, r, ".go should be called")

	},

	"replace": function() {

		var s = Stretchr.WithSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people/123")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		r.replace()

		assert.equals(r._params["~method"][0], "POST")
		assert.equals(goCalledWithReq, r, ".go should be called")

	},

	"delete": function() {

		var s = Stretchr.WithSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people/123")

		var goCalledWithReq = null;
		s.go = function(req){
			goCalledWithReq = req;
		}

		r.remove()

		assert.equals(r._params["~method"][0], "DELETE")
		assert.equals(goCalledWithReq, r, ".go should be called")

	}

});