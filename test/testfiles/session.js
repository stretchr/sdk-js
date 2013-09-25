buster.testCase("CookieSessionStore", {

  "set": function(){

    var i = new Stretchr.CookieSessionStore();
    var calls = {};
    assert.equals(i.set("name", "Mat"), i);

    assert.equals(Stretchr.cookie("name"), "Mat");

  },

  "get": function(){

    var i = new Stretchr.CookieSessionStore();
    var calls = {};
    Stretchr.setCookie("name", "Mat", 1);

    assert.equals(i.get("name"), "Mat");

  }

});
