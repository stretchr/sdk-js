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

  "loginUrl": function(){

    var client = new Stretchr.Client("proj", "api-key");

    assert.equals(client.loginUrl("google").split("=")[0], "http://proj.stretchr.com/api/v1.1/~auth/google/login?after")

  },

  "doLogin": function() {
    // log them out
    Stretchr.setCookie(Stretchr.SessionKeyLoggedIn, Stretchr.SessionKeyLoggedInNo, 1);

    var client = new Stretchr.Client();
    assert.equals(client.isLoggedIn(), false);
    assert.equals(client.doLogin("AUTH", "/users/ryon"), true);
    assert.equals(client.isLoggedIn(), true);

    assert.equals(client.authCode(), "AUTH");
    assert.equals(client.userRef(), "/users/ryon");
  },

  "doLogin triggers login:success": function() {
    // log them out
    Stretchr.setCookie(Stretchr.SessionKeyLoggedIn, Stretchr.SessionKeyLoggedInNo, 1);

    var client = new Stretchr.Client(),
      done = false;
    
    client.on("login:success", function() {
      done = true;
    });
    client.doLogin("AUTH", "/users/ryon");
    assert.equals(done, true);
  },

  "doLogin should let you supress events": function() {
    // log them out
    Stretchr.setCookie(Stretchr.SessionKeyLoggedIn, Stretchr.SessionKeyLoggedInNo, 1);

    var client = new Stretchr.Client(),
      done = false;
    
    client.on("login:success", function() {
      done = true;
    });
    client.doLogin("AUTH", "/users/ryon", {noEvents: true});
    assert.equals(done, false);
  },

  "logout": function(){

    var client = new Stretchr.Client();
    assert.equals(client.doLogin("AUTH", {name: "Ryon"}), true);

    assert.equals(client.logout(), true);
    assert.equals(client.isLoggedIn(), false);
    assert.equals(client.authCode(), "");
    assert.equals(client.userRef(), "");

  },

  "request when logged in should add auth": function(){

    var client = new Stretchr.Client();
    client.doLogin("AUTHCODE123", {name: "Ryon"});

    var request = client.at("something");

    assert.equals(request.params("auth")[0], "AUTHCODE123");

  },

  "check params for auth/user values": function() {
    var client = new Stretchr.Client(),
      //spy on the doLogin method
      spy = this.spy(client, "doLogin");

    //change the url without reloading page...will break in older browsers and IE below v10
    //only for testing
    window.history.pushState(null, null, window.location.pathname + "?auth=ryon");
    assert.equals("?auth=ryon", location.search);

    //rerun init
    client.init();

    assert.called(spy);
    //TODO : why aren't we passing in a user's url to doLogin and letting it load the users data for us?
    // we expect doLogin(auth, userRef) to be called, which will store the cookies and then 
    // redirect the user to the same page without the auth/user params
  }

});
