buster.testCase("AuthService", {

  "loadProviders": function(){

    var client = new Stretchr.Client("acc", "proj", "ABC123");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);

    transport.fakeResponse = function(request, options){
      var response = {};
      response[Stretchr.ResponseKeyStatus] = 200;
      response[Stretchr.ResponseKeyData] = {
        "~items": [
          {"name":"github","loginpath":"~auth/github/login"},
          {"name":"google","loginpath":"~auth/google/login"}
        ],
        "~count": 2
      };
      return response;
    };

    var calls = {};

    client.loadAuthProviders({
      success: function(){
        calls["success"] = calls["success"] || [];
        calls["success"].push(arguments);
      }
    });

    assert.equals(calls["success"].length, 1);
    assert.equals(calls["success"][0][0].resources().items()[0].data("name"), "github")
    assert.equals(calls["success"][0][0].resources().items()[0].data("loginpath"), "~auth/github/login")
    assert.equals(calls["success"][0][0].resources().items()[1].data("name"), "google")
    assert.equals(calls["success"][0][0].resources().items()[1].data("loginpath"), "~auth/google/login")

  }

});
