describe("Stretchr Bag", function() {
  it("Should let me create a bag", function() {
    var bag = new Stretchr.Bag()
    expect(bag).toBeDefined();
  });

  it("Should let me set and get data", function() {
    var bag = new Stretchr.Bag();
    bag.data("key", "value");
    expect(bag.data("key")).toEqual(["value"]);
  });

  it("Should let me pass in an object", function() {
    var bag = new Stretchr.Bag();
    bag.data({key: "value", key2: "value2"});
    expect(bag.data("key")).toEqual(["value"]);
    expect(bag.data("key2")).toEqual(["value2"]);
  });

  it("Should know how to handle being given an array as a value", function() {
    var bag = new Stretchr.Bag();
    bag.data("key", ["value1", "value2"]);
    expect(bag.data("key")).toEqual(["value1", "value2"]);
  });
});
