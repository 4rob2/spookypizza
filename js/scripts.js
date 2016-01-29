function Selection(pizza, size, toppings)  {
   this.pizza2 = "";
   this.pansize = "";
   this.toppings = "";
}



$(document).ready(function() {
  $("form#spookypizza").submit(function(event) {
  var pancost=$("select#pansize").val();
  var pizzacrust=$("select#pizza2").val();
  var subtotal3=$("select#quantity").val();
  var subtotal1 = 0;
  var subtotal2 = 0;
  var result =  ("#result") .val();

    if (pancost === "Medium") {
      subtotal1 = 5
    }else if (pancost === "Large") {
      subtotal1 = 6
    }else if (pancost === "Family") {
      subtotal = 7
  };

    if ("#Pepperoni" === true) {
      subtotal2 = (substotal2 + 1)
    }
    if ("#Sausage" === true) {
      subtotal2 = (substotal2 + 1)
    }
    if ("#Canadian Bacon" === true) {
      subtotal2 = (substotal2 + 1)
    }
    if ("#Pineapple" === true) {
      subtotal2 = (substotal2 + 1)
    }
    if ("#Olives" === true) {
      subtotal2 = (substotal2 + 1)
    }
    if ("#Green Peppers" === true) {
      subtotal2 = (substotal2 + 1)
    }
    if ("#Green Onion" === true) {
      subtotal2 = (substotal2 + 1)
    }
    if ("#Extra Cheese" === true) {
        subtotal2 = (substotal2 + 1)
    }
    $("#result") = ((subtotal1 + (subtotal2 - 2)))*(subtotal3);
    $("#result").append("<li>"+i+"</li>");
  });
});



	// tcost = 0.0;
	// for(var i=0;i<selectObj.length;i++)
		// if(selectObj[i].selected) tcost += 0.50*pizzasize;
	// return tcost;
