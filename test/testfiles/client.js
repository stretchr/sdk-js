buster.testCase("Client", {

  "init": function(){

    var s = new Stretchr.Client("acc", "proj", "pub");
    assert.equals(s.account(), "acc");
    assert.equals(s.project(), "proj");
    assert.equals(s.apiKey(), "pub");
    assert.equals(s.host(), "stretchr.com");
    assert.equals(s.protocol(), "https");
    assert.equals(s.apiVersion(), "1.1");

    assert.equals(s.sessionStore().$class, Stretchr.CookieSessionStore);

  },

  "at": function(){

    var client = new Stretchr.Client("acc", "proj", "ABC123");
    var request = client.at("/path/to/something");

    refute.equals(undefined, request, "at() should return a request.")

    assert.equals(request.client(), client)
    assert.equals(request.path(), "/path/to/something")
    assert.equals(request.params("key")[0], "ABC123", ".at() should set the key param");

  },

  "new method": function(){

    var client = new Stretchr.Client("acc", "proj", "ABC123");
    var resource = client.new("people", {
      name: "Mat"
    });

    assert.equals(resource.$class, Stretchr.Resource);
    assert.equals(resource.client(), client);
    assert.equals(resource.data("name"), "Mat");
    assert.equals(resource._data.dirty(), true, "New object should start with dirty data")

  },

  "getTransport": function(){

    var client = new Stretchr.Client("acc", "proj", "key");
    var t = client.transport();

    assert.equals(t.client(), client);
    assert.equals(t.$class, Stretchr.JSONPTransport);

  },

  "url": function(){

    var client = new Stretchr.Client();
    client.setAccount("acc");
    client.setProject("proj")
    client.setHost("something.com");
    client.setProtocol("http");
    client.setApiVersion(1.1);

    var u = client.url("/people/1?name=Ryan");
    assert.equals(u, "http://acc.something.com/api/v1.1/proj/people/1?name=Ryan")

    var u = client.url("people/1?name=Ryan");
    assert.equals(u, "http://acc.something.com/api/v1.1/proj/people/1?name=Ryan")

  }

});

buster.testCase("Client - auth", {

  "isLoggedIn": function(){

    // log them out
    var s = new Stretchr.Client("acc", "proj", "key");
    s.logout();

    assert.equals(s.isLoggedIn(), false, "client.isLoggedIn()");

    s.doLogin("auth", "userpath");
    assert.equals(s.isLoggedIn(), true, "client.isLoggedIn()");

  },

  "loginUrl": function(){

    var client = new Stretchr.Client("acc", "proj", "api-key");
    assert.equals(client.loginUrl("google").split("=")[0], "https://acc.stretchr.com/api/v1.1/proj/~auth/google/login?after")

    // where after url is a full thing
    assert.equals(client.loginUrl("google", "http://www.stretchr.com/page?param=true"), "https://acc.stretchr.com/api/v1.1/proj/~auth/google/login?after=" + encodeURIComponent("http://www.stretchr.com/page?param=true"))

  },

  "login" : function() {
    var client = new Stretchr.Client();
    client.setLocation(new Stretchr.TestLocation());
    client.login("method");

    assert.defined(client.location().history()[0]);
  },

  "doLogin": function() {
    // log them out

    var client = new Stretchr.Client();
    client.logout();
    assert.equals(client.isLoggedIn(), false);
    assert.equals(client.doLogin("AUTH", "/users/ryon"), true);
    assert.equals(client.isLoggedIn(), true);

    assert.equals(client.authCode(), "AUTH");
    assert.equals(client.userpath(), "/users/ryon");
  },

  "doLogin triggers login:success": function() {

    var client = new Stretchr.Client(),
      done = false;

    client.logout();

    client.on("login:success", function() {
      done = true;
    });
    client.doLogin("AUTH", "/users/ryon");
    assert.equals(done, true);
  },

  "doLogin should let you supress events": function() {
    // log them out

    var client = new Stretchr.Client(),
      done = false;
    client.logout();

    client.on("login:success", function() {
      done = true;
    });
    client.doLogin("AUTH", "/users/ryon", {noEvents: true});
    assert.equals(done, false);
  },

  "logout": function(){

    var client = new Stretchr.Client();
    assert.equals(client.doLogin("AUTH", {name: "Ryon"}), true);
    assert.equals(client.authCode(), "AUTH");

    assert.equals(client.logout(), true);
    assert.equals(client.isLoggedIn(), false);
    assert.equals(client.authCode(), "" || null);
    assert.equals(client.userpath(), "" || null);

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
      spy = this.spy(client, "doLogin"),
      triggeredEvent = false;

    //load the test location
    var test = new Stretchr.TestLocation();
    test.setParam(Stretchr.UrlParamAuthKey, "asdf");
    test.setParam(Stretchr.UrlParamAuthUser, "/users/ryon");
    test.setParam("test", "true");
    client.setLocation(test);

    client.on("login:success", function() {
      triggeredEvent = true;
    });

    client.checkParams();

    assert.called(spy);
    assert.equals(false, triggeredEvent); //we don't want a triggered event in this case, cause it'll just reload!

    assert.defined(client.location().history()[0])
    assert.equals(client.location().history()[0], location.pathname + "?test=true")
  },

  "Set params in init" : function() {
    var client = new Stretchr.Client("acc", "proj", "key", {
      host: "hostname",
      protocol: "protocol",
      apiVersion: "api",
      transport: "transport",
      sessionStore: "store"
    });

    assert.equals(client.host(), "hostname");
    assert.equals(client.protocol(), "protocol");
    assert.equals(client.sessionStore(), "store");
    assert.equals(client.transport(), "transport");
    assert.equals(client.apiVersion(), "api");
  }

});
