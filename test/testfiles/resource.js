buster.testCase("Resource", {

  "init": function(){

    var data = {
      "~id": "ABC123",
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client();
    var r = new Stretchr.Resource(client, data);
    assert.equals(r._data.$class, Stretchr.Bag);

  },

  "data": function(){

    var data = {
      "~id": "ABC123",
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client();
    var r = new Stretchr.Resource(client, data);
    assert.equals(r._data.$class, Stretchr.Bag);
    assert.equals(r.data(), data);

    assert.equals(r.data("name"), "Ryon")
    assert.equals(r.data("~id"), "ABC123")
    assert.equals(r.data("number"), 26)
    assert.equals(r.data("something"), true)

  },

  "id": function(){

    var data = {
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var client = new Stretchr.Client();
    var r = new Stretchr.Resource(client, data);

    assert.equals(r.hasId(), false, "hasId()");

    r._data.set("~id", "ABC123");

    assert.equals(r.hasId(), true, "hasId()");
    assert.equals(r.id(), "ABC123");

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
    var r = new Stretchr.ResourceCollection(client, data);

    assert.equals(r.rawData(), data);

    assert.equals(r.count(), 2);
    assert.equals(r.items()[0].data("name"), "Ryon");
    assert.equals(r.items()[1].data("name"), "Tyler");

  }

});
