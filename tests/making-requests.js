buster.testCase("Making requests", {

	"_makeRequest": function(){

		scriptsBefore = document.getElementsByTagName('head')[0].getElementsByTagName("script").length

		var s = Stretchr.NewSession("test", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

		s._makeRequest(r)

		scriptsAfter = document.getElementsByTagName('head')[0].getElementsByTagName("script").length
		assert.equals(scriptsAfter, scriptsBefore+1, "Should be one more script element")

	},

	"Stretchr.go": function(){
		
		var s = Stretchr.NewSession("project", "pub", "priv")
		var makeRequestCalls = 0;
		s._makeRequest = function(request){
			makeRequestCalls++;
		}

		var r = Stretchr.NewRequest(s, "path")

		Stretchr._context = 0;

		context = s.go(r)

		assert.equals(context, "1", "Context should be a string of 1")

		assert.equals(context, "1", "return of go should be the context")

		assert.defined(Stretchr._requests["" + context], "_requests[context] should get defined")
		assert.equals(makeRequestCalls, 1, "_makeRequest should get called")

		assert.equals(r._params["context"][0], context, "Context should be set on the request")

	},

	"callback": function() {

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

		var completedCallbackCalls = 0;
		var completedCallbackResponse = null;

		// setup the request
		Stretchr._requests = {
			"1": {
				onCompleted: function(response){
					completedCallbackCalls++;
					completedCallbackResponse = response;
				}
			}
		};

		var obj = {"x":"1"};
		Stretchr.callback(obj, "1");

		assert.equals(completedCallbackCalls, 1, "onCompleted callback should get called")
		assert.defined(completedCallbackResponse, "completedCallbackResponse")

		assert.equals(completedCallbackResponse.x, "1")

	},

	"callback with no onCompleted": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

		Stretchr._requests = {
			"1": {
			}
		};

		var obj = {"x":"1"};
		Stretchr.callback(obj, "1");

		assert.equals(typeof Stretchr._requests["1"].onCompleted, "undefined")

	}

});