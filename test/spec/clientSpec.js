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

  it("Should let me specify the hostName but default to stretchr.com", function() {
    var stretchr = new Stretchr.Client("acc", "proj", "key", {hostName: "asdf.com"});
    expect(stretchr.hostName).toEqual("asdf.com");

    var stretchr = new Stretchr.Client("acc", "proj", "key");
    expect(stretchr.hostName).toEqual("stretchr.com");
  });

  it("Should let me specify the protocol but default to https", function() {
    var stretchr = new Stretchr.Client("acc", "proj", "key", {protocol: "http"});
    expect(stretchr.protocol).toEqual("http");

    var stretchr = new Stretchr.Client("acc", "proj", "key");
    expect(stretchr.protocol).toEqual("https");
  });

  it("Should let me specify the apiVersion but default to 1.1", function() {
    var stretchr = new Stretchr.Client("acc", "proj", "key", {apiVersion: "1.0"});
    expect(stretchr.apiVersion).toEqual("1.0");

    var stretchr = new Stretchr.Client("acc", "proj", "key");
    expect(stretchr.apiVersion).toEqual("1.1");
  });
});
