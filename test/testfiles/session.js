buster.testCase("CookieSessionStore", {

  "set": function(){

    var i = new Stretchr.CookieSessionStore();
    var calls = {};
    assert.equals(i.set("name", "Mat", {
      success: function(){
        calls["success"] = calls["success"] || [];
        calls["success"].push(arguments);
      }
    }), i);

    assert.equals(calls["success"].length, 1);
    assert.equals(calls["success"][0][0], "name");
    assert.equals(calls["success"][0][1], "Mat");

  },

  "get": function(){

    var i = new Stretchr.CookieSessionStore();
    var calls = {};
    Stretchr.setCookie("name", "Mat", 1);

    assert.equals(i.get("name", {
      success: function(){
        calls["success"] = calls["success"] || [];
        calls["success"].push(arguments);
      }
    }), i);

    assert.equals(calls["success"].length, 1);
    assert.equals(calls["success"][0][0], "name");
    assert.equals(calls["success"][0][1], "Mat");

  }

});
