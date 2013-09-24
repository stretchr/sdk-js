buster.testCase("Request", {

  "init": function(){

    var s = new Stretchr.Client("proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    refute.equals(undefined, r);
    assert.equals(r.client(), s);
    assert.equals(r.path(), "/path/to/something");
    assert.equals(r.method(), Stretchr.MethodGet);

  },

  "body and hasBody": function(){

    var s = new Stretchr.Client("proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    assert.equals(r.hasBody(), false);

    assert.equals(r.body({
      "name": "Mat"
    }), r);

    assert.equals(r._body["name"], "Mat");
    assert.equals(r.body()["name"], "Mat");
    assert.equals(r.hasBody(), true);

  },

  "params": function(){

    var s = new Stretchr.Client("proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    // set one
    r.params("key", "value")

    assert.equals("value", r.params()["key"][0])

    // set many
    r.params({
      "key2": "value2",
      "key3": "value3"
    });

    assert.equals("value", r.params()["key"][0])
    assert.equals("value2", r.params()["key2"][0])
    assert.equals("value3", r.params()["key3"][0])

    //set many chaining
    assert.equals(r, r.params({"key4":"value4"}));

    // add another value
    r.params("key", "another-value");
    assert.equals("value", r.params()["key"][0])
    assert.equals("another-value", r.params()["key"][1])

    // get a value out of a single key
    var e = r.params("key");
    assert.equals("value", e[0]);

    // should allow chaining
    var t = r.params("key", "value3");
    assert.equals(t, r);

  },

  "where" : function() {

    var s = new Stretchr.Client("proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    // set one
    r.where("key", "value")
    assert.equals("value", r.where()["key"][0])

    // set many
    r.where({
      "key2": "value2",
      "key3": "value3"
    });

    assert.equals("value", r.where()["key"][0])
    assert.equals("value2", r.where()["key2"][0])
    assert.equals("value3", r.where()["key3"][0])

    // add another value
    r.where("key", "another-value");
    assert.equals("value", r.where()["key"][0])
    assert.equals("another-value", r.where()["key"][1])

    // get a value out of a single key
    var e = r.where("key");
    assert.equals("value", e[0]);

    // should allow chaining
    var t = r.where("key", "value3");
    assert.equals(t, r);
  },

  "url": function(){

    var s = new Stretchr.Client("proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    assert.equals(
      r.url(),
      "http://proj.stretchr.com/api/v1.1/path/to/something"
    );

    r.where({
      "name": "Ryan",
      "lives": "Airport"
    });

    r.params({
      "total": true,
      "exclude": "~timestamps"
    });

    assert.equals(
      r.url(),
      "http://proj.stretchr.com/api/v1.1/path/to/something?total=true&exclude=~timestamps&%3Aname=Ryan&%3Alives=Airport"
    );

  },

  "querystring": function(){

    var s = new Stretchr.Client("proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    r.where({
      "name": "Ryan",
      "lives": "Airport"
    });

    r.params({
      "total": true,
      "exclude": "~timestamps"
    });

    assert.equals(
      r.querystring(),
      "total=true&exclude=~timestamps&%3Aname=Ryan&%3Alives=Airport"
    );

  },

  "read": function(){

    var client = new Stretchr.Client("proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);

    var testData = {
      "name": "Ryon",
      "age": 26,
      "crazy": true
    };

    transport.fakeResponse = function(request, options){
      var response = {};
      response[Stretchr.ResponseKeyStatus] = 200;
      response[Stretchr.ResponseKeyData] = testData;
      return response;
    };

    var r = new Stretchr.Request(client, "/people");

    var calls = {};

    var options = {
      success: function(){
        calls["success"] = calls["success"] || [];
        calls["success"].push(arguments);
      },
      before: function(){
        calls["before"] = calls["before"] || [];
        calls["before"].push(arguments);
      },
      after: function(){
        calls["after"] = calls["after"] || [];
        calls["after"].push(arguments);
      },
      error: function(){
        calls["error"] = calls["error"] || [];
        calls["error"].push(arguments);
      }
    };
    r.read(options);

    assert.equals(r.method(), Stretchr.MethodGet);
    assert.equals(transport.requests()[0][0], r);

    // success(response)
    assert.equals(calls["success"].length, 1, "success should get raised");
    var response = calls["success"][0][0];

    assert.equals(response.data()["name"], testData["name"])
    assert.equals(response.data()["age"], testData["age"])
    assert.equals(response.data()["crazy"], testData["crazy"])

  }

});
