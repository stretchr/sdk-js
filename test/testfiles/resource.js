buster.testCase("Resource", {

  "init": function(){

    var data = {
      "~id": "ABC123",
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client();
    var path = "people"
    var r = new Stretchr.Resource(client, path, data);
    assert.equals(r._data.$class, Stretchr.Bag);
    assert.equals(r.path(), path);

  },

  "data": function(){

    var data = {
      "~id": "ABC123",
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client();
    var r = new Stretchr.Resource(client, "people", data);
    assert.equals(r._data.$class, Stretchr.Bag);
    assert.equals(r.data(), data);

    assert.equals(r.data("name"), "Ryon")
    assert.equals(r.data("~id"), "ABC123")
    assert.equals(r.data("number"), 26)
    assert.equals(r.data("something"), true)
    assert.equals(r.path(), "people");

  },

  "id": function(){

    var data = {
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client();
    var r = new Stretchr.Resource(client, "people", data);

    assert.equals(r.hasId(), false, "hasId()");

    r._data.set("~id", "ABC123");

    assert.equals(r.hasId(), true, "hasId()");
    assert.equals(r.id(), "ABC123");

  },

  "save: no changes": function(){

    var data = {
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client();
    var r = new Stretchr.Resource(client, "people", data);

    var calls = {};
    assert.equals(r.save({
      success: function(){
        calls["success"] = calls["success"] || [];
        calls["success"].push(arguments);
      },
      error: function(){
        calls["error"] = calls["error"] || [];
        calls["error"].push(arguments);
      },
      before: function(){
        calls["before"] = calls["before"] || [];
        calls["before"].push(arguments);
      },
      after: function(){
        calls["after"] = calls["after"] || [];
        calls["after"].push(arguments);
      }
    }), r);

    if (assert.equals(calls["success"].length, 1)) {
      assert.equals(calls["success"][0].success(), true);
      assert.equals(calls["success"][0], Stretchr.ResponseNothingToDo, "Stretchr.ResponseNothingToDo");
    }
    if (assert.equals(calls["after"].length, 1)) {
      assert.equals(calls["after"][0].success(), true);
      assert.equals(calls["after"][0], Stretchr.ResponseNothingToDo, "Stretchr.ResponseNothingToDo");
    }

  },

"save: new resource (created)": function(){

    var data = {
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);
    var r = new Stretchr.Resource(client, "people", data);

    // make some changes
    r.data("name", "Mat").data("number", 30);

    transport.fakeResponse = function(request, options){

      var response = {};
      response[Stretchr.ResponseKeyStatus] = 201;
      response[Stretchr.ResponseKeyDataChanges] = {};
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoCreated] = 1;
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoDeltas] = [{
        "~id": "returned-id",
        "~created": 123456,
        "~updated": 234567,
        "~createdby": "1",
        "~updatedby": "2"
      }];

      return response;
    };

    var calls = {};
    r.save({
      success: function(){
        calls["success"] = calls["success"] || [];
        calls["success"].push(arguments);
      },
      error: function(){
        calls["error"] = calls["error"] || [];
        calls["error"].push(arguments);
      },
      before: function(){
        calls["before"] = calls["before"] || [];
        calls["before"].push(arguments);
      },
      after: function(){
        calls["after"] = calls["after"] || [];
        calls["after"].push(arguments);
      }
    });

    var theRequest = transport.requests()[0][0];
    assert.equals(theRequest.method(), Stretchr.MethodPost);
    assert.equals(theRequest.path(), "people");
    assert.equals(theRequest.body()["name"], "Mat");

    assert.equals(r.id(), "returned-id", "ID should be updated");
    assert.equals(r.data("~created"), 123456);
    assert.equals(r.data("~updated"), 234567);
    assert.equals(r.data("~createdby"), "1");
    assert.equals(r.data("~updatedby"), "2");
    assert.equals(r.data("name"), "Mat");
    assert.equals(r.data("something"), true);

    if (assert.equals(calls["success"].length, 1)) {
      assert.equals(calls["success"][0].success(), true);
    }
    assert.equals(calls["before"].length, 1);
    assert.equals(calls["after"].length, 1);

  },

  "save: existing resource (updated)": function(){

    var data = {
      "~id": "1",
      "name": "Ryon",
      "number": 26,
      "something": true,
      "~created": 999,
      "~updated": 999,
      "~createdby": "john",
      "~updatedby": "monkey-allen"
    };
    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);
    var r = new Stretchr.Resource(client, "people", data);

    // make some changes
    r.data("name", "Mat").data("number", 30);

    transport.fakeResponse = function(request, options){

      var response = {};
      response[Stretchr.ResponseKeyStatus] = 201;
      response[Stretchr.ResponseKeyDataChanges] = {};
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoCreated] = 1;
      response[Stretchr.ResponseKeyDataChanges][Stretchr.ResponseKeyChangeInfoDeltas] = [{
        "~id": "returned-id",
        "~updated": 234567,
        "~updatedby": "2"
      }];

      return response;
    };

    var calls = {};
    r.save({
      success: function(){
        calls["success"] = calls["success"] || [];
        calls["success"].push(arguments);
      },
      error: function(){
        calls["error"] = calls["error"] || [];
        calls["error"].push(arguments);
      },
      before: function(){
        calls["before"] = calls["before"] || [];
        calls["before"].push(arguments);
      },
      after: function(){
        calls["after"] = calls["after"] || [];
        calls["after"].push(arguments);
      }
    });

    var theRequest = transport.requests()[0][0];
    assert.equals(theRequest.body()["name"], "Mat");
    assert.equals(theRequest.body()["something"], undefined, "Only fields that have changed should appear in PATCH when saving");
    assert.equals(theRequest.method(), Stretchr.MethodPatch);
    assert.equals(theRequest.path(), "people/1");

    assert.equals(r.id(), "returned-id", "ID should be same");
    assert.equals(r.data("~created"), 999);
    assert.equals(r.data("~updated"), 234567);
    assert.equals(r.data("~createdby"), "john");
    assert.equals(r.data("~updatedby"), "2");

    assert.equals(r.data("name"), "Mat");
    assert.equals(r.data("something"), true);

    if (assert.equals(calls["success"].length, 1)) {
      assert.equals(calls["success"][0].success(), true);
    }
    assert.equals(calls["before"].length, 1);
    assert.equals(calls["after"].length, 1);

  }

});

buster.testCase("ResourceCollection", {

  "init": function(){

    var data = {
      "~count":2,
      "~items":[{
        "~id": "ABC123",
        "name": "Ryon",
        "number": 26,
        "something": true
      },{
        "~id": "DEF456",
        "name": "Tyler",
        "number": 29,
        "something": false
      }]
    };

    var client = new Stretchr.Client();
    var r = new Stretchr.ResourceCollection(client, "people", data);

    assert.equals(r.rawData(), data);
    assert.equals(r.path(), "people");

    assert.equals(r.count(), 2);
    assert.equals(r.items()[0].data("name"), "Ryon");
    assert.equals(r.items()[0].path(), "people");
    assert.equals(r.items()[1].data("name"), "Tyler");
    assert.equals(r.items()[1].path(), "people");

  },

  "pagecount": function(){

    var data = {
      "~count":2,
      "~total":1564,
      "~items":[{
        "~id": "ABC123",
        "name": "Ryon",
        "number": 26,
        "something": true
      },{
        "~id": "DEF456",
        "name": "Tyler",
        "number": 29,
        "something": false
      }]
    };

    var client = new Stretchr.Client();
    var r = new Stretchr.ResourceCollection(client, "people", data);

    assert.equals(r.pagecount(10), 157);
    assert.equals(r.pagecount(100), 16);

  }

});
