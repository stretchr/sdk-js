buster.testCase("Stretchr", {

  "counter()": function(){

    Stretchr._counter = 0;
    assert.equals(Stretchr.counter(), 1)
    assert.equals(Stretchr.counter(), 2)
    assert.equals(Stretchr.counter(), 3)

  }

});
