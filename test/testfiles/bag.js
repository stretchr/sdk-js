buster.testCase("Bag", {

  "init": function(){

    var b = new Stretchr.Bag();

    refute.isNull(b._data)

  },

  "init with data": function(){

    var data = {
      "name": "Ryon"
    };
    var b = new Stretchr.Bag(data);

    assert.equals(b._data, data);
    assert.equals(b.dirty(), false, "Should not dirty");

  },

  "Bag get, set and has": function(){

    var b = new Stretchr.Bag();

    // set key / value
    assert.equals(b.has("name"), false);
    assert.equals(b, b.set("name", "Ryon"), "set should chain");
    assert.equals(b.has("name"), true);
    assert.equals("Ryon", b._data["name"]);

    // get with param
    assert.equals("Ryon", b.get("name"));

    // get entire data
    assert.equals(b._data, b.get());

  },

  "set another bag": function(){

    var b = new Stretchr.Bag();
    var b2 = new Stretchr.Bag();

    b.set("name", "Mat");
    b2.set("age", 30);

    b.set(b2);

    assert.equals(b.get("name"), "Mat");
    assert.equals(b.get("age"), 30);

  },

  "options: valueArrays": function(){

    assert.equals(Stretchr.Bag.ParamBagOptions.valueArrays, true);

    var b = new Stretchr.Bag(null, {
      valueArrays: true
    });
    assert.equals(b, b.set("name", "Ryon"), "set should chain");
    assert.equals("Ryon", b._data["name"][0]);
    assert.equals(b, b.set("name", "Mat"), "set should chain");
    assert.equals("Ryon", b._data["name"][0]);
    assert.equals("Mat", b._data["name"][1]);

  },

  // set should use _set underneath
  "_set": function(){

    var b = new Stretchr.Bag();

    var _setCalls = [];
    b._set = function(){
      _setCalls.push(arguments);
    };

    b.set("name", "Ryon");
    assert.equals(_setCalls.length, 1);
    assert.equals(_setCalls[0][0], "name");
    assert.equals(_setCalls[0][1], "Ryon");

  },

  "events": function(){

    var b = new Stretchr.Bag();

    var changeCalls = [];
    var beforeChangeCalls = [];
    // register the change event
    b.change(function(){
      changeCalls.push(arguments);
    });
    b.on("before:change", function(){
      beforeChangeCalls.push(arguments);
    });

    b.set("name", "Ryon");

    if (assert.equals(changeCalls.length, 1)) {
      assert.equals(beforeChangeCalls.length, 1)
      assert.equals(changeCalls[0][0], "name")
      assert.equals(changeCalls[0][1], undefined)
      assert.equals(changeCalls[0][2], "Ryon")
    }

    // see if the bag is dirty
    assert.equals(b.dirty(), true);
    b.clean();
    assert.equals(b.dirty(), false);

    b.set("name", "Mat");
    assert.equals(b.dirty(), true);

    if (assert.equals(changeCalls.length, 2)) {
      assert.equals(beforeChangeCalls.length, 2)
      assert.equals(changeCalls[0][0], "name")
      assert.equals(changeCalls[0][1], "Ryon")
      assert.equals(changeCalls[0][2], "Mat")
    }

  },

  "data shortcut method": function(){

    var b = new Stretchr.Bag();

    // stub out the methods
    var setCalls = [], getCalls = [];
    b.set = function(){ setCalls.push(arguments); return setCalls; }
    b.get = function(){ getCalls.push(arguments); return getCalls; }

    // set something
    assert.equals(b.data("name", "Ryon"), Stretchr.Bag.NoValue);

    assert.equals(setCalls[0][0], "name", "set should be called")
    assert.equals(setCalls[0][1], "Ryon", "set should be called")

    // get it
    assert.equals(b.data("name"), getCalls, "get should be called");

    // set the whole thing
    var newData = {};
    assert.equals(b.data(newData), Stretchr.Bag.NoValue);
    assert.equals(b._data, newData);

    // get the whole thing
    assert.equals(b._data, b.data())

  },

  "data shortcut method via .apply": function(){

    var b = new Stretchr.Bag();

    // stub out the methods
    var setCalls = [], getCalls = [];
    b.set = function(){ setCalls.push(arguments); return setCalls; }
    b.get = function(){ getCalls.push(arguments); return getCalls; }

    // set something
    var f = function(){
      return b.data.apply(b, arguments);
    };
    f("name", "Ryon");

    assert.equals(setCalls[0][0], "name", "set should be called")
    assert.equals(setCalls[0][1], "Ryon", "set should be called")

    // get it
    assert.equals(f("name"), getCalls, "get should be called");

    // set the whole thing
    var newData = {};
    f(newData);
    assert.equals(b._data, newData);

    // get the whole thing
    assert.equals(b._data, f())

  },

  "querystring": function(){

    var b = new Stretchr.Bag(null, Stretchr.Bag.ParamBagOptions);

    assert.equals(b.querystring(), "")

    b.set("name", "Mat")
      .set("name", "Ryan")
      .set("something", true)
      .set("age", 30)
      .set(" & ", " & ")
    ;

    assert.equals(b.querystring(), "name=Mat&name=Ryan&something=true&age=30&%20%26%20=%20%26%20")
    assert.equals(b.querystring({
      keyPrefix: ":"
    }), "%3Aname=Mat&%3Aname=Ryan&%3Asomething=true&%3Aage=30&%3A%20%26%20=%20%26%20")

  },

  "querystring of multiple bags": function(){

    var b = new Stretchr.Bag(null, Stretchr.Bag.ParamBagOptions);

    assert.equals(b.querystring(), "")

    b.set("name", "Mat")
      .set("name", "Ryan")
      .set("else", true)
      .set("egg", 29)
      .set(" & ", " & ")
    ;


    var b2 = new Stretchr.Bag(null, Stretchr.merge(Stretchr.Bag.ParamBagOptions, {
      keyPrefix: ":"
    }));

    assert.equals(b2.querystring(), "")

    b2.set("name", "Tyler")
      .set("something", true)
      .set("age", 30)
    ;

    assert.equals(
      Stretchr.Bag.querystring(b, b2),
      "name=Mat&name=Ryan&else=true&egg=29&%20%26%20=%20%26%20&%3Aname=Tyler&%3Asomething=true&%3Aage=30"
    )

  }

});
