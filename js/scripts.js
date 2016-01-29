$(document).ready(function() {
  $("form#selection").submit(function(event) {
  var size=$("select#pizza1").val();
  var pizza2=$("select#pizza2").val();

  var result = ["5", "8", "10"];

    if (pizza2 === "4" && size === "3")
    {
    result=result[0];
    }
    else if (apizza2 === "5" && size === "5")
    {
    result=result[1];
    }
    else if (pizza2 === "2" && size === "4")
    {
    result=result[2];
    }
    else if (pizza2 === "1" && size === "1")
    {
    result=result[3];
    }
    else if (pizza2 === "3" && size === "2")
    {
    result=result[4];
    }
    else
      {
      result=result[5];
      }


    $("#" + result).show();
    $("#" + result).siblings().hide();

    event.preventDefault();
  });
});
