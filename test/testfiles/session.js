buster.testCase("Session", {

  "init": function(){

    var s = new Stretchr.Session("proj", "pub", "priv");
    assert.equals(s.projectName(), "proj");
    assert.equals(s.publicKey(), "pub");
    assert.equals(s.privateKey(), "priv");

  },

  "at": function(){

    var session = new Stretchr.Session("proj", "pub", "priv");
    var request = session.at("/path/to/something");

    refute.equals(undefined, request, "at() should return a request.")

    assert.equals(session, request.session())
    assert.equals("/path/to/something", request.path())

  }

});
