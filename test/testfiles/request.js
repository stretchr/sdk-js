buster.testCase("Request", {

  "init": function(){

    var s = new Stretchr.Session("proj", "pub", "priv");
    var r = new Stretchr.Request(s, "/path/to/something");

    refute.equals(undefined, r);
    assert.equals(r.session(), s);
    assert.equals(r.path(), "/path/to/something");

  },

  "params": function(){

    var s = new Stretchr.Session("proj", "pub", "priv");
    var r = new Stretchr.Request(s, "/path/to/something");

    // set one
    r.params("key", "value")

    assert.equals("value", r.params()["key"][0])

    // set many
    r.params({
      "key2": "value2",
      "key3": "value3"
    });

    assert.equals("value", r.params()["key"][0])
    assert.equals("value2", r.params()["key2"][0])
    assert.equals("value3", r.params()["key3"][0])

    //set many chaining
    assert.equals(r, r.params({"key4":"value4"}));

    // add another value
    r.params("key", "another-value");
    assert.equals("value", r.params()["key"][0])
    assert.equals("another-value", r.params()["key"][1])

    // get a value out of a single key
    var e = r.params("key");
    assert.equals("value", e[0]);

    // should allow chaining
    var t = r.params("key", "value3");
    assert.equals(t, r);

  },

  "where" : function() {

    var s = new Stretchr.Session("proj", "pub", "priv");
    var r = new Stretchr.Request(s, "/path/to/something");

    // set one
    r.where("key", "value")
    assert.equals("value", r.where()["key"][0])

    // set many
    r.where({
      "key2": "value2",
      "key3": "value3"
    });

    assert.equals("value", r.where()["key"][0])
    assert.equals("value2", r.where()["key2"][0])
    assert.equals("value3", r.where()["key3"][0])

    // add another value
    r.where("key", "another-value");
    assert.equals("value", r.where()["key"][0])
    assert.equals("another-value", r.where()["key"][1])

    // get a value out of a single key
    var e = r.where("key");
    assert.equals("value", e[0]);

    // should allow chaining
    var t = r.where("key", "value3");
    assert.equals(t, r);
  }

});
