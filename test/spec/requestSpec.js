describe("Stretchr Request", function() {
  it("Should let me create a new request", function() {
    var request = new Stretchr.Request("path", "asdf");
    expect(request).toBeDefined();
    expect(request.path).toEqual("path");
    expect(request.client).toEqual("asdf")
  });
});
