describe("Stretchr Request", function() {
  it("Should let me create a new request", function() {
    var request = new Stretchr.Request("path", "asdf");
    expect(request).toBeDefined();
    expect(request.path).toEqual("path");
    expect(request.client).toEqual("asdf")
  });

  it("Should let me get a url for my request", function() {
    var request = new Stretchr.Request("path", {protocol: "https", hostName: "stretchr.com", account: "account", project: "project", apiVersion: "1.1"});
    expect(request.url()).toEqual("https://account.stretchr.com/api/v1.1/project/path");
  });

  it("Should let me specify params", function() {
    var request = new Stretchr.Request("path", {protocol: "https", hostName: "stretchr.com", account: "account", project: "project", apiVersion: "1.1"});
    request.params("key", "value");
    expect(request.url()).toEqual("https://account.stretchr.com/api/v1.1/project/path?key=value")
  });
});
