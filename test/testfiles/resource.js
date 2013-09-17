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
    assert.equals(r.data(), data);

  }

});
