buster.testCase("Stretchr.ChangeInfo", {

  "init": function(){

    var data = {"~created":5,"~updated":4,"~deleted":6,"~deltas":[{"~id":"ABC123"},{"~id":"DEF456"}]};
    var changes = new Stretchr.ChangeInfo(data)

    assert.equals(changes.rawData(), data);
    assert.equals(changes.data(), data);

    assert.equals(changes.created(), 5);
    assert.equals(changes.updated(), 4);
    assert.equals(changes.deleted(), 6);

    assert.equals(changes.deltas()[0]["~id"], "ABC123");
    assert.equals(changes.deltas()[1]["~id"], "DEF456");

  }

});
