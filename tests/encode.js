buster.testCase("Encoding", {

  "encode": function(){

    assert.equals(Stretchr.encode("Hi there"), "Hi%20there");
    assert.equals(Stretchr.encode("Hi+there"), "Hi%2Bthere");

  },

  "Stretchr.encodeMap": function(){ 

    var a = {
      "c": [2],
      "a": [2, 1],
      "x": [2],
      "b": [3]
    }

    assert.equals(Stretchr.encodeMap(a), "a=1&a=2&b=3&c=2&x=2")

  },

  "Stretchr.encodeMap": function(){ 

    var a = {
      "c": ["+"],
      "a": [2, 1],
      "x": [2],
      "b": [3]
    }

    assert.equals(Stretchr.encodeMap(a), "a=1&a=2&b=3&c=+&x=2")
    assert.equals(Stretchr.encodeMap(a, true), "a=1&a=2&b=3&c=%2B&x=2")

  }

});