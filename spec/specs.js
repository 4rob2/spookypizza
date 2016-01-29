describe('Selection', function() {
  it("displays the pizza, size, and toppings together", function() {
    var testSelection = new Selection("cheese","family", ["olive", "sausage","extra cheese"] );
    expect(testSelection.pizza).to.equal("please");
    expect(testSelection.pansize).to.equal("family")
    expect(testSelection.toppings).to.eql[(]"olive", "sausage","extra cheese"]);
  });
});
describe('Selection', function() {
  it("adds the pizza, size, and toppings together", function() {
    var testSelection = new Selection("cheese","family", ["olive", "sausage","extra cheese"] );
    expect(testSelection.pizza).to.equal("please" + "family" +  "with" + ["olive", "sausage","extra cheese"]);

  });
});
