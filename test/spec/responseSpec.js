
//Stubs are defined in /src/test-transporter.js

describe("Stretchr Response - Generic", function() {
  it("Should know how to decide which apiVersion to use", function() {
    spyOn(Stretchr.V1_1, "Response");
    var response = Stretchr.Response({apiVersion: "1.1"}, {data: "Response"}, {});
    expect(Stretchr.V1_1.Response).toHaveBeenCalled();
  });

  describe("Firing success event", function() {
    var results = {},
      response;
    beforeEach(function(done) {
      results = {};
      response = Stretchr.Response({apiVersion: "1.1"}, Stretchr.V1_1.Stubs.get_single, {
        success: function(response) {
          results["success"] = true;
        },
        error: function(response) {
          results["error"] = true;
        },
        done: function(response) {
          results["done"] = true;
          done();
        }
      });
    });

    it("Should fire off events", function() {
      expect(results["success"]).toEqual(true);
      expect(results["done"]).toEqual(true);
      expect(results["error"]).toBeUndefined();
    });
  });

  describe("Firing error event", function() {
    var results = {},
      response;
    beforeEach(function(done) {
      results = {};
      response = Stretchr.Response({apiVersion: "1.1"}, Stretchr.V1_1.Stubs.not_found, {
        success: function(response) {
          results["success"] = true;
        },
        error: function(response) {
          results["error"] = true;
        },
        done: function(response) {
          results["done"] = true;
          done();
        }
      });
    });

    it("Should fire off events", function() {
      expect(results["error"]).toEqual(true);
      expect(results["done"]).toEqual(true);
      expect(results["success"]).toBeUndefined();
    });
  });
});
