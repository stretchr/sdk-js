buster.testCase("Specific issues", {

  "issue three": function() { 

    // signing with ? fails
    var s = Stretchr.NewSession("project", "pub", "priv")
    var r = Stretchr.NewRequest(s, "people").body({
      "question": "Does signing work? & no errors?"
    }).method("GET");

    assert.equals(r.stringToSign(), 'GET&http://project.stretchr.com/api/v1.1/people?always200=1&body={"question":"Does signing work? & no errors?"}&callback=Stretchr.callback&key=pub&method=GET&private=priv');

  }
});