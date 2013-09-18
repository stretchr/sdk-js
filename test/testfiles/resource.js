buster.testCase("Resource", {

  "init": function(){

    var data = {
      "~id": "ABC123",
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var session = new Stretchr.Session();
    var r = new Stretchr.Resource(session, data);
    assert.equals(r._data.$class, Stretchr.Bag);

  },

  "data": function(){

    var data = {
      "~id": "ABC123",
      "name": "Ryon",
      "number": 26,
      "something": true
    };
    var session = new Stretchr.Session();
    var r = new Stretchr.Resource(session, data);
    assert.equals(r._data.$class, Stretchr.Bag);
    assert.equals(r.data(), data);

    assert.equals(r.data("name"), "Ryon")
    assert.equals(r.data("~id"), "ABC123")
    assert.equals(r.data("number"), 26)
    assert.equals(r.data("something"), true)

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

    var session = new Stretchr.Session();
    var r = new Stretchr.ResourceCollection(session, data);

    assert.equals(r.rawData(), data);

    assert.equals(r.count(), 2);
    assert.equals(r.items()[0].data("name"), "Ryon");
    assert.equals(r.items()[1].data("name"), "Tyler");

  }

});
