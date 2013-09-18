var responseFixtures = {

  "success": [
    {
      "~status": 200
    },
    function(r, n) {
      assert.equals(r.status(), 200, n)
    }
  ],

  "Success with data": [
    {
      "~status": 200,
      "~data": {
        "name": "Ryon"
      }
    },
    function(r, n){
      assert.equals(r.data()["name"], "Ryon");
    }
  ],

  "Success with context": [
    {
      "~status": 200,
      "~context": "123"
    },
    function(r, n){
      assert.equals(r.context(), "123");
    }
  ],

  "success() method 200": [
    {
      "~status": 200,
    },
    function(r, n) {
      assert.equals(r.success(), true)
    }
  ],
  "success() method 201": [
    {
      "~status": 200,
    },
    function(r, n) {
      assert.equals(r.success(), true)
    }
  ],

  "success() method not found": [
    {
      "~status": 404,
    },
    function(r, n) {
      assert.equals(r.success(), false)
    }
  ],

  "Errors": [
    {
      "~status": 500,
      "~errors": [{"~message": "Something went wrong"},{"~message": "Something else went wrong"}]
    },
    function(r, n){

      assert.equals(r.success(), false)
      assert.equals(r.errors().length, 2)
      assert.equals(r.errors()[0], "Something went wrong")
      assert.equals(r.errors()[1], "Something else went wrong")

    }
  ],

  /*
    Responses
  */
  "Resource from response": [
    {
      "~success": 200,
      "~data": {
        "name": "Ryon",
        "age": 26,
        "something": true
      }
    },
    function(r, n){

      resource = r.resource();

      assert.equals(resource.data()["name"], "Ryon")
      assert.equals(resource.data()["age"], 26)
      assert.equals(resource.data()["something"], true)

    }
  ],

  "ResourceCollection from response": [
    {
      "~data":{
        "~count":2,
        "~items":[
          {
            "name":"Laurie",
            "~id":"abc1"
          },
          {
            "name":"Simon",
            "~id":"abc2"
          }
        ]
      },
      "~status":200
    },
    function(r, n){

      resources = r.resources();

      assert.equals(resources.count(), 2)

      resource1 = resources.items()[0]
      resource2 = resources.items()[1]

      assert.equals(resource1.data("name"), "Laurie")
      assert.equals(resource1.data("~id"), "abc1")
      assert.equals(resource2.data("name"), "Simon")
      assert.equals(resource2.data("~id"), "abc2")

    }
  ],

  "Error in response": [
    {
      "~status":500,
      "~errors":[
        {"~message": "Something went wrong"}
      ]
    },
    function(r,n){

      assert.equals(r.success(), false);
      assert.equals(r.errors()[0], "Something went wrong");

    }
  ]

};

buster.testCase("Response", {

  "fixtures": function(){

    var session = new Stretchr.Session();

    for (var name in responseFixtures) {

      var rawResponse = responseFixtures[name][0]
      var assertions = responseFixtures[name][1];

      var r = new Stretchr.Response(session, rawResponse);
      assertions(r, name);

    }

  },

  "init": function(){

    var session = new Stretchr.Session();
    var r = new Stretchr.Response(session, {});

    assert.equals(r.session(), session, "Session")

  }

});
