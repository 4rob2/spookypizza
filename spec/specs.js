describe('Selection', function() {
  it("concates the selection, size, and toppings together", function() {
    var testSelection = new Selection("cheese","family", ["olive", "sausage","extra cheese"] );
    expect(testSelection.pizza).to.equal("please");
    expect(testSelection.pansize).to.equal("family")
    expect(testSelection.toppings).to.eql("olive", "sausage","extra cheese"]);
  });
});
