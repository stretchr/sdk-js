buster.testCase("CookieSessionStore", {

  "set": function(){

    var i = new Stretchr.CookieSessionStore();
    var calls = {};
    assert.equals(i.set("name", "Mat"), i);
    assert.equals(i.get("name"), "Mat");

  },

  "get": function(){

    var i = new Stretchr.CookieSessionStore();
    var calls = {};
    i.set("name", "Mat", 1);
    assert.equals(i.get("name"), "Mat");

  },

  "set expire days" : function() {
    var i = new Stretchr.CookieSessionStore({expireDays: 28}),
      date = new Date();
    date.setDate(date.getDate() + 28);
    assert.equals(i._options.expires, date.toUTCString());
  }

});
