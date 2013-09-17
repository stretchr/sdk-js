buster.testCase("ParamBag", {

  "ParamBag get, add and set": function(){

    // make a param bag
    var p = new Stretchr.ParamBag();

    // set one
    assert.equals(p, p.add("key", "value"));
    assert.equals("value", p.get("key")[0]);

    // set many
    assert.equals(p, p.add({"key2": "value2", "key3": "value3"}));
    assert.equals("value", p.get("key")[0]);
    assert.equals("value2", p.get("key2")[0]);
    assert.equals("value3", p.get("key3")[0]);

    // set many more
    assert.equals(p, p.add({"key2": "value2b", "key3": "value3b"}));
    assert.equals("value", p.get("key")[0]);
    assert.equals("value2", p.get("key2")[0]);
    assert.equals("value3", p.get("key3")[0]);
    assert.equals("value2b", p.get("key2")[1]);
    assert.equals("value3b", p.get("key3")[1]);

    // set array
    assert.equals(p, p.add("key4", ["value4a", "value4b"]));
    assert.equals("value4a", p.get("key4")[0]);
    assert.equals("value4b", p.get("key4")[1]);

    // get them all
    var params = p.get();
    assert.equals("value", params["key"][0]);
    assert.equals("value2", params["key2"][0]);
    assert.equals("value2b", params["key2"][1]);
    assert.equals("value3", params["key3"][0]);
    assert.equals("value3b", params["key3"][1]);
    assert.equals("value4a", params["key4"][0]);
    assert.equals("value4b", params["key4"][1]);

    // set overwirtes the whole array
    assert.equals(p, p.set("key4", "FOUR"));
    assert.equals("FOUR", p.get("key4")[0]);

  },

  "urlEncoded": function(){

    // make a param bag
    var p = new Stretchr.ParamBag();

    p.add({
      "name": "Ryan",
      "age": 26,
      "lovely": true,
      "numbers": "one"
    });
    p.add("numbers", "two");
    p.add("numbers", "three");
    p.add("encoding", " &");

    var e = p.urlEncoded();
    refute.equals(-1, e.indexOf("name=Ryan"));
    refute.equals(-1, e.indexOf("age=26"));
    refute.equals(-1, e.indexOf("lovely=true"));
    //TODO : Ask mat if this shoudl be url encoded or not
    //refute.equals(-1, e.indexOf("numbers=one,two,three"));
    refute.equals(-1, e.indexOf("encoding=%20%26"));

    var e = p.urlEncoded({
      keyPrefix: "--"
    });
    refute.equals(-1, e.indexOf("--name=Ryan"));
    refute.equals(-1, e.indexOf("--age=26"));
    refute.equals(-1, e.indexOf("--lovely=true"));
    //TODO : Ask mat if this should be url encoded or not
    //refute.equals(-1, e.indexOf("--numbers=one,two,three"));
    refute.equals(-1, e.indexOf("--encoding=%20%26"));

  }

});
