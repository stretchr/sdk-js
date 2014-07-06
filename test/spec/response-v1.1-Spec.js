
//Stubs are defined in /src/test-transporter.js

describe("Stretchr Response v1.1", function() {
  it("Should let me create a v1.1 Response object", function() {
    var response = new Stretchr.V1_1.Response(Stretchr.V1_1.Stubs.get_single);
    expect(response).toBeDefined();
    expect(response.raw).toEqual(Stretchr.V1_1.Stubs.get_single);
  });

  it("Should know how to extract a get response (and also convert object to array)", function() {
    var response = new Stretchr.V1_1.Response(Stretchr.V1_1.Stubs.get_single);
    expect(response.data).toEqual([{"field" : "value"}]);
    expect(response.status).toEqual(200);
    expect(response.success).toEqual(true);
  });

  it("Should know how to extract a get multiple response", function() {
    var response = new Stretchr.V1_1.Response(Stretchr.V1_1.Stubs.get_multiple);
    expect(response.total).toEqual(155563);
    expect(response.count).toEqual(4);
    expect(response.data).toEqual([{"name":"Mat","~id":"id-here"}, {"name":"Laurie","~id":"id-here"}, {"name":"Steve","~id":"id-here"}, {"name":"Chi","~id":"id-here"}])
  });

  it("Should know how to handle errors", function() {
    var response = new Stretchr.V1_1.Response(Stretchr.V1_1.Stubs.not_found);
    expect(response.success).toEqual(false);
    expect(response.errors).toEqual([{"~message":"one"}, {"~message":"two"}])
    expect(response.errorMessages).toEqual(["one", "two"])
  });

  it("Should know how to handle change info", function() {
    var response = new Stretchr.V1_1.Response(Stretchr.V1_1.Stubs.changes);
    expect(response.success).toEqual(true);
    expect(response.changes).toEqual({ "~created":1, "~deltas":[{"~id":"asdf"}] });
  });
});
