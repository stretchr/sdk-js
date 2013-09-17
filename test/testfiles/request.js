buster.testCase("Request", {

  "init": function(){

    var s = new Stretchr.Session("proj", "pub", "priv");
    var r = new Stretchr.Request(s, "/path/to/something");

    refute.equals(undefined, r);
    assert.equals(r.session(), s);
    assert.equals(r.path(), "/path/to/something");

  }

  /*,

  "params": function(){

    var s = new Stretchr.Session("proj", "pub", "priv");
    var r = new Stretchr.Request(s, "/path/to/something");

    // set one
    r.param("key", "value")
    assert.equals("value", r.params()["key"][0])

    // set many
    r.params({
      "key2": "value2",
      "key3": "value3"
    });

    assert.equals("value", r.params()["key"][0])
    assert.equals("value2", r.params()["key2"][0])
    assert.equals("value3", r.params()["key3"][0])

    // add another value
    r.param("key", "another-value")

    assert.equals("another-value", r.params()["key"][0])
    assert.equals("another-value", r.params()["key"][1])

  }*/

});
