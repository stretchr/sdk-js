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

  describe("Read Request", function() {
    var request, transporter, results = {};
    beforeEach(function(done) {
      transporter = new Stretchr.TestTransporter();
      request = new Stretchr.Request("path", {transporter: transporter, protocol: "https", hostName: "stretchr.com", account: "account", project: "project", apiVersion: "1.1"});

      transporter.responses.push(Stretchr.V1_1.Stubs.get_single);

      request.read({
        success: function(response) {
          results["success"] = response;
        },
        error: function(response) {
          results["error"] = response;
        },
        done: function(response) {
          results["done"] = response;
          done();
        }
      });
    });

    it("Should know how to perform the request", function() {
      expect(results["success"].success).toEqual(true);
      expect(results["success"].data).toBeDefined();
      expect(transporter.requests[0][0].method).toEqual(Stretchr.Defaults.readMethod);
    });
  });

  describe("Create Request", function() {
    var request, transporter, results = {};
    beforeEach(function(done) {
      transporter = new Stretchr.TestTransporter();
      request = new Stretchr.Request("path", {transporter: transporter, protocol: "https", hostName: "stretchr.com", account: "account", project: "project", apiVersion: "1.1"});

      transporter.responses.push(Stretchr.V1_1.Stubs.changes);

      request.create({field: "value"}, {
        success: function(response) {
          results["success"] = response;
        },
        error: function(response) {
          results["error"] = response;
        },
        done: function(response) {
          results["done"] = response;
          done();
        }
      });
    });

    it("Should know how to perform the request", function() {
      expect(results["success"].success).toEqual(true);
      expect(results["success"].changes).toBeDefined();
      expect(transporter.requests[0][0].method).toEqual(Stretchr.Defaults.createMethod);
      expect(transporter.requests[0][0].body).toEqual({field: "value"});
    });
  });

  describe("Update Request", function() {
    var request, transporter, results = {};
    beforeEach(function(done) {
      transporter = new Stretchr.TestTransporter();
      request = new Stretchr.Request("path", {transporter: transporter, protocol: "https", hostName: "stretchr.com", account: "account", project: "project", apiVersion: "1.1"});

      transporter.responses.push(Stretchr.V1_1.Stubs.changes);

      request.update({field: "value"}, {
        success: function(response) {
          results["success"] = response;
        },
        error: function(response) {
          results["error"] = response;
        },
        done: function(response) {
          results["done"] = response;
          done();
        }
      });
    });

    it("Should know how to perform the request", function() {
      expect(results["success"].success).toEqual(true);
      expect(results["success"].changes).toBeDefined();
      expect(transporter.requests[0][0].method).toEqual(Stretchr.Defaults.updateMethod);
      expect(transporter.requests[0][0].body).toEqual({field: "value"});
    });
  });

  describe("Replace Request", function() {
    var request, transporter, results = {};
    beforeEach(function(done) {
      transporter = new Stretchr.TestTransporter();
      request = new Stretchr.Request("path", {transporter: transporter, protocol: "https", hostName: "stretchr.com", account: "account", project: "project", apiVersion: "1.1"});

      transporter.responses.push(Stretchr.V1_1.Stubs.changes);

      request.replace({field: "value"}, {
        success: function(response) {
          results["success"] = response;
        },
        error: function(response) {
          results["error"] = response;
        },
        done: function(response) {
          results["done"] = response;
          done();
        }
      });
    });

    it("Should know how to perform the request", function() {
      expect(results["success"].success).toEqual(true);
      expect(results["success"].changes).toBeDefined();
      expect(transporter.requests[0][0].method).toEqual(Stretchr.Defaults.replaceMethod);
      expect(transporter.requests[0][0].body).toEqual({field: "value"});
    });
  });

  describe("Delete Request", function() {
    var request, transporter, results = {};
    beforeEach(function(done) {
      transporter = new Stretchr.TestTransporter();
      request = new Stretchr.Request("path", {transporter: transporter, protocol: "https", hostName: "stretchr.com", account: "account", project: "project", apiVersion: "1.1"});

      transporter.responses.push(Stretchr.V1_1.Stubs.changes);

      request.remove({
        success: function(response) {
          results["success"] = response;
        },
        error: function(response) {
          results["error"] = response;
        },
        done: function(response) {
          results["done"] = response;
          done();
        }
      });
    });

    it("Should know how to perform the request", function() {
      expect(results["success"].success).toEqual(true);
      expect(results["success"].changes).toBeDefined();
      expect(transporter.requests[0][0].method).toEqual(Stretchr.Defaults.deleteMethod);
    });
  });

});
