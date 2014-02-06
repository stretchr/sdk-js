buster.testCase("Concurrently reading multiple resources", {

  "init": function(){

    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);
    var baseRequest = client.at("people");
    var reader = new Stretchr.multiReader(baseRequest);

    assert.equals(reader.baseRequest(), baseRequest);

  },

  "Request.readEverything": function() {

    var client = new Stretchr.Client("acc", "proj", "key");
    var transport = new Stretchr.TestTransport();
    client.setTransport(transport);

    var testData = [{
      "name": "Ryon",
      "age": 26,
      "crazy": true
    },{
      "name": "Tylor",
      "age": 28,
      "crazy": false
    }];

    transport.fakeResponse = function(request, options){
      var response = {};

      // we'll use these later to ensure the order was correct
      testData[0].index = testData[0].index || -1;
      testData[0].index++;
      testData[1].index = testData[1].index || 0;
      testData[1].index++;

      response[Stretchr.ResponseKeyStatus] = 200;
      response[Stretchr.ResponseKeyData] = {
        "~total": 20,
        "~items": testData,
        "~count": 2
      };
      return response;
    };

    var r = new Stretchr.Request(client, "/people").params("limit", 2);

    var afterresult;
    var responses = [];
    r.readEverything({
      after: function(result){
        afterresult = result;
      },
      each: function(response){
        responses.push(response);
      }
    });

		assert.equals(responses.length, 10, "Should have been ten calls to each event.");

    assert.equals(afterresult["~items"].length, 20);
    assert.equals(afterresult["~total"], 20);
    assert.equals(afterresult["~count"], 20);

    console.info(afterresult["~items"])

    assert.equals(afterresult["~items"][0].index, 0);
    assert.equals(afterresult["~items"][1].index, 1);
    assert.equals(afterresult["~items"][2].index, 2);
    assert.equals(afterresult["~items"][3].index, 3);
    assert.equals(afterresult["~items"][4].index, 4);
    assert.equals(afterresult["~items"][5].index, 5);
    assert.equals(afterresult["~items"][6].index, 6);
    assert.equals(afterresult["~items"][7].index, 7);
    assert.equals(afterresult["~items"][8].index, 8);
    assert.equals(afterresult["~items"][9].index, 9);

  }

});
