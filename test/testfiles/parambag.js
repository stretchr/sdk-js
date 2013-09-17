buster.testCase("ParamBag", {

  "ParamBag get, add and set": function(){

    // make a param bag
    var p = new Stretchr.ParamBag();

    // set one
    assert.equals(p, p.add("key", "value"));
    assert.equals(p.size(), 1, "size")
    assert.equals("value", p.get("key")[0]);

    // set many
    assert.equals(p, p.add({"key2": "value2", "key3": "value3"}));
    assert.equals(p.size(), 3, "size")
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

  "ParamBag magical param": function() {
    var p = new Stretchr.ParamBag();
    p.params("key", "value");
    assert.equals(p.params("key")[0], "value");

    p.params({key2: "value2", key3: "value3"});
    assert.equals(p.params("key2")[0], "value2");
    assert.equals(p.params("key3")[0], "value3");

    //returns all params
    var p2 = new Stretchr.ParamBag();
    p2.params({key: "value", key2: "value2"});
    assert.equals(p2.params()["key"][0], "value");

    //should ignore undefined
    assert.equals(p.params("key", undefined)[0], "value");
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
    p.add(" &", "and");

    var e = p.urlEncoded();
    refute.equals(-1, e.indexOf("name=Ryan"));
    refute.equals(-1, e.indexOf("age=26"));
    refute.equals(-1, e.indexOf("lovely=true"));
    refute.equals(-1, e.indexOf("numbers=one%2Ctwo%2Cthree"));
    refute.equals(-1, e.indexOf("%20%26=and"));

    var e = p.urlEncoded({
      keyPrefix: "--"
    });
    refute.equals(-1, e.indexOf("--name=Ryan"));
    refute.equals(-1, e.indexOf("--age=26"));
    refute.equals(-1, e.indexOf("--lovely=true"));
    refute.equals(-1, e.indexOf("--numbers=one%2Ctwo%2Cthree"));
    refute.equals(-1, e.indexOf("--encoding=%20%26"));
    refute.equals(-1, e.indexOf("--%20%26=and"));

  }

  // ,

  // "Merging param bags": function(){

  //   var p = new Stretchr.ParamBag();
  //   var p2 = new Stretchr.ParamBag();

  //   p.set("name", "Ryon");
  //   p2.set("name", "Ryan");
  //   p2.set("age", 26);

  //   assert.equals(p, p.add(p2));

  //   assert.equals("Ryon", p.get("name")[0]);
  //   assert.equals("Ryan", p.get("name")[1]);
  //   assert.equals(26, p.get("age")[0]);

  // }

});
