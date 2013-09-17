buster.testCase("Session", {

  "init": function(){

    var s = new Stretchr.Session("proj", "pub", "priv");
    assert.equals(s.projectName(), "proj");
    assert.equals(s.publicKey(), "pub");
    assert.equals(s.privateKey(), "priv");

  },

  

});