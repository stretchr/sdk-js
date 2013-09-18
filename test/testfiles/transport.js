var TestFileValue = 0;

buster.testCase("JSONPTransport", {

  "Transport.url": function(){

    var t = new Stretchr.Transport();
    t.setHost("monkey.something.com");
    t.setProtocol("http");
    t.setAPIVersion(1.1);

    var u = t.url("/people/1?name=Ryan");

    assert.equals(u, "http://monkey.something.com/api/v1.1/people/1?name=Ryan")

  },

  "JSONPTransport.makeRequest": function(){

    var t = new Stretchr.JSONPTransport();
    var options = {
      path: "testfiles/includes/IncreaseTestFileValueByOne.js"
    };

    var eventCallbacks = [];

    // bind some events
    t.before(function(){
      eventCallbacks.push("before");
    });
    t.after(function(){
      eventCallbacks.push("after");
    });

    t.makeRequest(options);

    assert.equals(1, eventCallbacks.length, "before event should get called")

    // call the callback
    response = {
      "~status": 200
    };
    window[t.lastCallbackFunctionName](response);

    assert.equals(2, eventCallbacks.length, "after event should get called")

    window.setTimeout(function(){
      assert.equals(TestFileValue, 1);
    }, 500);

  }

});
