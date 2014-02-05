buster.testCase("Stretchr", {

  "counter()": function(){

    Stretchr._counter = 0;
    assert.equals(Stretchr.counter(), 1)
    assert.equals(Stretchr.counter(), 2)
    assert.equals(Stretchr.counter(), 3)

  },

  "version": function(){

    assert.equals(Stretchr.version, "1.3.1", "Stretchr version " + Stretchr.version)

  },

  "merge": function(){

    var o = Stretchr.merge({
      one: 1,
      x: 1
    },undefined,{
      two: 2,
      x: 2
    },null,{
      three: 3
    })

    assert.equals(o.one, 1);
    assert.equals(o.two, 2);
    assert.equals(o.three, 3);
    assert.equals(o.x, 2);

  },

  "fixoptions": function(){

    var options = {
      "success": function(){}
    };

    assert.equals(Stretchr.fixoptions(options).success, options.success);

    var afterOnly = function(){};
    assert.equals(Stretchr.fixoptions(afterOnly).after, afterOnly);

  }

});
