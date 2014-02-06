buster.testCase("Request", {

  "init": function(){

    var s = new Stretchr.Client("acc", "proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    refute.equals(undefined, r);
    assert.equals(r.client(), s);
    assert.equals(r.path(), "/path/to/something");
    assert.equals(r.method(), Stretchr.MethodGet);

  },

  "isCollective": function(){

    var client = new Stretchr.Client("acc", "proj", "key");

    var r = new Stretchr.Request(client, "/people");
    assert.equals(r.isCollective(), true);
    var r = new Stretchr.Request(client, "people");
    assert.equals(r.isCollective(), true);

    var r = new Stretchr.Request(client, "/people/123");
    assert.equals(r.isCollective(), false);
    var r = new Stretchr.Request(client, "people/123");
    assert.equals(r.isCollective(), false);

  },

  "body and hasBody": function(){

    var s = new Stretchr.Client("acc", "proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    assert.equals(r.hasBody(), false);

    assert.equals(r.body({
      "name": "Mat"
    }), r);

    assert.equals(r._body["name"], "Mat");
    assert.equals(r.body()["name"], "Mat");
    assert.equals(r.hasBody(), true);

  },

  "bodystr": function(){

    var s = new Stretchr.Client("acc", "proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    assert.equals(r.body({
      "name": "Mat"
    }), r);

    assert.equals(r.bodystr(), '{"name":"Mat"}');

  },

  "body with resource extracts data": function(){

    var data = {
      "~id": "ABC123",
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client();
    var res = new Stretchr.Resource(client, data);
    var r = new Stretchr.Request(client, "/path/to/something");

    r.body(res);

    assert.equals(r._body, res.data(), "body(resource) should extract the data from the resource.");

  },

  "toString function": function(){

    var client = new Stretchr.Client("acc", "proj", "abc");
    var r = new Stretchr.Request(client, "/path/to/something");

    r.params({
      "key2": "value2",
      "key3": "value3"
    });

    r.where({
      "name": "Ryan",
      "lives": "Airport"
    });

    assert.equals(r.toString(), "GET https://acc.stretchr.com/api/v1.1/proj/path/to/something?key2=value2&key3=value3&%3Aname=Ryan&%3Alives=Airport")

  },

  "params": function(){

    var s = new Stretchr.Client("acc", "proj", "key");
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

    var s = new Stretchr.Client("acc", "proj", "key");
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

  "where helpers: order, skip, limit, page etc.": function(){

    var s = new Stretchr.Client("acc", "proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    assert.equals(r.order("~created"), r)
    assert.equals(r.params(Stretchr.ParamOrder)[0], "~created")

    assert.equals(r.skip(50), r)
    assert.equals(r.params(Stretchr.ParamSkip)[0], 50)

    assert.equals(r.limit(20), r)
    assert.equals(r.params(Stretchr.ParamLimit)[0], 20)

    assert.equals(r.page(2), r)
    assert.equals(r.params(Stretchr.ParamSkip)[0], 10)
    assert.equals(r.params(Stretchr.ParamLimit)[0], 10)

    assert.equals(r.page(3), r)
    assert.equals(r.params(Stretchr.ParamSkip)[0], 20)
    assert.equals(r.params(Stretchr.ParamLimit)[0], 10)

    assert.equals(r.page(2, 20), r)
    assert.equals(r.params(Stretchr.ParamSkip)[0], 20)
    assert.equals(r.params(Stretchr.ParamLimit)[0], 20)

    assert.equals(r.page(3, 20), r)
    assert.equals(r.params(Stretchr.ParamSkip)[0], 40)
    assert.equals(r.params(Stretchr.ParamLimit)[0], 20)

    assert.equals(r.page(1, 1), r)
    assert.equals(r.params(Stretchr.ParamSkip)[0], 0)
    assert.equals(r.params(Stretchr.ParamLimit)[0], 1)

    assert.equals(r.page(2, 1), r)
    assert.equals(r.params(Stretchr.ParamSkip)[0], 1)
    assert.equals(r.params(Stretchr.ParamLimit)[0], 1)

  },

  "url": function(){

    var s = new Stretchr.Client("acc", "proj", "key");
    var r = new Stretchr.Request(s, "/path/to/something");

    assert.equals(
      r.url(),
      "https://acc.stretchr.com/api/v1.1/proj/path/to/something"
    );
    assert.equals(
      r.rooturl(),
      "https://acc.stretchr.com/api/v1.1/proj/path/to/something"
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
      "https://acc.stretchr.com/api/v1.1/proj/path/to/something?total=true&exclude=~timestamps&%3Aname=Ryan&%3Alives=Airport"
    );
    assert.equals(
      r.rooturl(),
      "https://acc.stretchr.com/api/v1.1/proj/path/to/something"
    );

  },

  "querystring": function(){

    var s = new Stretchr.Client("acc", "proj", "key");
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

    var client = new Stretchr.Client("acc", "proj", "key");
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
    assert.equals(r.read(options), r, "chain?");

    assert.equals(r.method(), Stretchr.MethodGet);
    assert.equals(transport.requests()[0][0], r);

    // success(response)
    assert.equals(calls["success"].length, 1, "success should get raised");
    var response = calls["success"][0][0];

    assert.equals(response.data()["name"], testData["name"])
    assert.equals(response.data()["age"], testData["age"])
    assert.equals(response.data()["crazy"], testData["crazy"])

  },

  "create": function(){

    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);

    var testData = {
      "name": "Ryon",
      "age": 26,
      "crazy": true
    };

    transport.fakeResponse = function(request, options){
      var response = {};

      response[Stretchr.ResponseKeyDataChanges] = {};
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoCreated] = 1;
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoDeltas] = [{
        "~id": "returned-id",
        "~created": 123456,
        "~updated": 234567,
        "~createdby": "1",
        "~updatedby": "2"
      }];
      return {"~data":response,"~status":201};
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
    assert.equals(r.create(testData, options), r, "chain?");

    assert.equals(r.body(), testData);
    assert.equals(r.method(), Stretchr.MethodPost);
    assert.equals(transport.requests()[0][0], r);

    // success(response)
    assert.equals(calls["success"].length, 1, "success should get raised");
    var response = calls["success"][0][0];

  },

  "create with ID in path": function(){

    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);

    var testData = {
      "name": "Ryon",
      "age": 26,
      "crazy": true
    };

    transport.fakeResponse = function(request, options){
      var response = {};

      response[Stretchr.ResponseKeyDataChanges] = {};
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoCreated] = 1;
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoDeltas] = [{
        "~id": "returned-id",
        "~created": 123456,
        "~updated": 234567,
        "~createdby": "1",
        "~updatedby": "2"
      }];
      return {"~data":response,"~status":201};
    };

    var r = new Stretchr.Request(client, "/people/123");

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
    assert.equals(r.create(testData, options), r, "chain?");

    assert.equals(r.body(), testData);
    assert.equals(r.method(), Stretchr.MethodPut);
    assert.equals(transport.requests()[0][0], r);

    // success(response)
    assert.equals(calls["success"].length, 1, "success should get raised");
    var response = calls["success"][0][0];

  },

  "update": function(){

    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);

    var testData = {
      "name": "Ryon",
      "age": 26,
      "crazy": true
    };

    transport.fakeResponse = function(request, options){
      var response = {};
      response[Stretchr.ResponseKeyDataChanges] = {};
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoUpdated] = 1;
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoDeltas] = [{
        "~id": "returned-id",
        "~created": 123456,
        "~updated": 234567,
        "~createdby": "1",
        "~updatedby": "2"
      }];
      return {"~data":response,"~status":201};
    };

    var r = new Stretchr.Request(client, "/people/1");

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
    assert.equals(r.update(testData, options), r, "chain?");

    assert.equals(r.body(), testData);
    assert.equals(r.method(), Stretchr.MethodPatch);
    assert.equals(transport.requests()[0][0], r);

    // success(response)
    assert.equals(calls["success"].length, 1, "success should get raised");
    var response = calls["success"][0][0];

  },

  "replace": function(){

    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);

    var testData = {
      "name": "Ryon",
      "age": 26,
      "crazy": true
    };

    transport.fakeResponse = function(request, options){
      var response = {};
      response[Stretchr.ResponseKeyDataChanges] = {};
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoUpdated] = 1;
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoDeltas] = [{
        "~id": "returned-id",
        "~created": 123456,
        "~updated": 234567,
        "~createdby": "1",
        "~updatedby": "2"
      }];
      return {"~data":response,"~status":201};
    };

    var r = new Stretchr.Request(client, "/people/1");

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
    assert.equals(r.replace(testData, options), r, "chain?");

    assert.equals(r.body(), testData);
    assert.equals(r.method(), Stretchr.MethodPut);
    assert.equals(transport.requests()[0][0], r);

    // success(response)
    assert.equals(calls["success"].length, 1, "success should get raised");
    var response = calls["success"][0][0];

  },

  "remove": function(){

    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);

    var testData = {
      "name": "Ryon",
      "age": 26,
      "crazy": true
    };

    transport.fakeResponse = function(request, options){
      var response = {};
      response[Stretchr.ResponseKeyDataChanges] = {};
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoUpdated] = 1;
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoDeltas] = [{
        "~id": "returned-id",
        "~created": 123456,
        "~updated": 234567,
        "~createdby": "1",
        "~updatedby": "2"
      }];
      return {"~data":response,"~status":201};
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
    assert.equals(r.remove(options), r, "chain?");

    assert.equals(r.method(), Stretchr.MethodDelete);
    assert.equals(transport.requests()[0][0], r);

    // success(response)
    assert.equals(calls["success"].length, 1, "success should get raised");
    var response = calls["success"][0][0];

  },

  "clone": function(){

    var client = new Stretchr.Client("acc", "proj", "key");
    var request = client.at("path/to/things");

    request.where("name", "Mat").where("age", ">30");
    request.params("order", "-age").params("something", "true");

    var clone = request.clone();
    refute.equals(request, clone);

    assert.equals(clone._params._data["order"], request._params._data["order"])
    assert.equals(clone._params._data["something"], request._params._data["something"])
    assert.equals(clone._where._data["name"], request._where._data["name"])

  }

});
