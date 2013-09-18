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

  "Bag get and set": function(){

    var b = new Stretchr.Bag();

    // set key / value
    assert.equals(b, b.set("name", "Ryon"), "set should chain");
    assert.equals("Ryon", b._data["name"]);

    // get with param
    assert.equals("Ryon", b.get("name"));

    // get entire data
    assert.equals(b._data, b.get());

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
    b.data("name", "Ryon");

    assert.equals(setCalls[0][0], "name", "set should be called")
    assert.equals(setCalls[0][1], "Ryon", "set should be called")

    // get it
    assert.equals(b.data("name"), getCalls, "get should be called");

    // set the whole thing
    var newData = {};
    b.data(newData);
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

  }

});
