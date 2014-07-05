describe("Stretchr Client", function() {
  it("Should let me create a new client", function() {
    var stretchr = new Stretchr.Client("acc", "proj", "key");
    expect(stretchr).toBeDefined();
    expect(stretchr.account).toEqual("acc");
    expect(stretchr.project).toEqual("proj");
    expect(stretchr.key).toEqual("key");
  });

  it("Should let me specify a url for my resource", function() {
    var stretchr = new Stretchr.Client("acc", "proj", "key");
    expect(stretchr.at).toBeDefined();
    expect(stretchr.at("path").path).toEqual("path");
  });

  it("Should pass the client into the request object", function() {
    var stretchr = new Stretchr.Client("acc", "proj", "key");
    expect(stretchr.at("path").client).toEqual(stretchr);
  });
});
