function setupParams(paramString) {
  //change the url without reloading page...will break in older browsers and IE below v10
  //only for testing
  window.history.pushState(null, null, window.location.pathname + paramString);
}

function clearParams() {
  setupParams("");
}

buster.testCase("stretchr.location", {

  setUp: function() {
    //get everything ready to start a test
    clearParams();
  },

  tearDown: function() {
    //get everything all cleared up after a test;
    clearParams();
  },

  "know how to pull params out of the url": function(){
    setupParams("?name=ryon");
    assert.equals(window.location.search, "?name=ryon");
    var l = new Stretchr.Location();
    assert.equals(l.param("name"), "ryon");
  },

  "know how to redirect" : function() {
    var l = new Stretchr.Location();
    assert.defined(l.redirect);
  }

});
