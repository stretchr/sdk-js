var responseFixtures = {
  "success": [
    {
      "~status": 200
    },
    function(r, n) {
      assert.equals(r.status(), 200, n)
    }
  ]
};

buster.testCase("Response", {

  "fixtures": function(){

    for (var name in responseFixtures) {

      var rawResponse = responseFixtures[name][0]
      var assertions = responseFixtures[name][1];

      var r = new Stretchr.Response(rawResponse);
      assertions(r, name);

    }

  }

});
