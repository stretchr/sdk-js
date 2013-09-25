buster.testCase("Client", {

  "init": function(){

    var s = new Stretchr.Client("proj", "pub");
    assert.equals(s.projectName(), "proj");
    assert.equals(s.apiKey(), "pub");
    assert.equals(s.host(), "proj.stretchr.com");
    assert.equals(s.protocol(), "http");
    assert.equals(s.apiVersion(), "1.1");

    assert.equals(s.sessionStore().$class, Stretchr.CookieSessionStore);

  },

  "at": function(){

    var client = new Stretchr.Client("proj", "ABC123");
    var request = client.at("/path/to/something");

    refute.equals(undefined, request, "at() should return a request.")

    assert.equals(request.client(), client)
    assert.equals(request.path(), "/path/to/something")
    assert.equals(request.params("key")[0], "ABC123", ".at() should set the key param");

  },

  "getTransport": function(){

    var client = new Stretchr.Client("proj", "key");
    var t = client.transport();

    assert.equals(t.client(), client);
    assert.equals(t.$class, Stretchr.JSONPTransport);

  },

  "url": function(){

    var client = new Stretchr.Client();
    client.setHost("monkey.something.com");
    client.setProtocol("http");
    client.setApiVersion(1.1);

    var u = client.url("/people/1?name=Ryan");
    assert.equals(u, "http://monkey.something.com/api/v1.1/people/1?name=Ryan")

    var u = client.url("people/1?name=Ryan");
    assert.equals(u, "http://monkey.something.com/api/v1.1/people/1?name=Ryan")

  }

});

buster.testCase("Client - auth", {

  "isLoggedIn": function(){

    // log them out
    Stretchr.setCookie(Stretchr.SessionKeyLoggedIn, Stretchr.SessionKeyLoggedInNo, 1);

    var client = new Stretchr.Client();
    assert.equals(client.isLoggedIn(), false);

    Stretchr.setCookie(Stretchr.SessionKeyLoggedIn, Stretchr.SessionKeyLoggedInYes, 1);
    assert.equals(client.isLoggedIn(), true);

  },

  "doLogin": function(){

    // log them out
    Stretchr.setCookie(Stretchr.SessionKeyLoggedIn, Stretchr.SessionKeyLoggedInNo, 1);

    var client = new Stretchr.Client();
    assert.equals(client.isLoggedIn(), false);
    assert.equals(client.doLogin("AUTH", {name: "Ryon"}), true);
    assert.equals(client.isLoggedIn(), true);

    assert.equals(client.authCode(), "AUTH");
    assert.equals(client.userData()["name"], "Ryon");

  },

  "logout": function(){

    var client = new Stretchr.Client();
    assert.equals(client.doLogin("AUTH", {name: "Ryon"}), true);

    assert.equals(client.logout(), true);
    assert.equals(client.isLoggedIn(), false);
    assert.equals(client.authCode(), "");
    assert.equals(client.userData(), null);

  },

  "request when logged in should add auth": function(){

    var client = new Stretchr.Client();
    client.doLogin("AUTHCODE123", {name: "Ryon"});

    var request = client.at("something");

    assert.equals(request.params("auth")[0], "AUTHCODE123");

  }

});
