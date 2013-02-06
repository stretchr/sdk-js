buster.testCase("Making requests", {

	"_makeRequest": function(){

		scriptsBefore = document.getElementsByTagName('head')[0].getElementsByTagName("script").length

		var s = stretchr.WithSession("test", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		s._makeRequest(r)

		scriptsAfter = document.getElementsByTagName('head')[0].getElementsByTagName("script").length
		assert.equals(scriptsAfter, scriptsBefore+1, "Should be one more script element")

	},

	"stretchr.go": function(){
	
		var makeRequestCalls = 0;
		stretchr._makeRequest = function(request){
			makeRequestCalls++;
		}

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		stretchr._context = 0;

		context = s.go(r)

		assert.equals(context, 1, "return of go should be the context")

		assert.defined(stretchr._requests[context], "_requests[context] should get defined")
		assert.equals(makeRequestCalls, 1, "_makeRequest should get called")

	},

	"callback": function() {

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		var completedCallbackCalls = 0;
		var completedCallbackResponse = null;

		// setup the request
		stretchr._requests = {
			"1": {
				onCompleted: function(response){
					completedCallbackCalls++;
					completedCallbackResponse = response;
				}
			}
		};

		var obj = {"x":"1"};
		stretchr.callback(obj, "1");

		assert.equals(completedCallbackCalls, 1, "onCompleted callback should get called")
		assert.defined(completedCallbackResponse, "completedCallbackResponse")

		assert.equals(completedCallbackResponse.x, "1")

	}

});