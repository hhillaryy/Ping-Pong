var userNumber = function(input) {
  var pingArray = []
  for (var i = 1; i<= input; i++) {
    if (i % 15 === 0) {
      pingArray.push("pingpong");
    } else if (i % 3 === 0) {
      pingArray.push("ping");
    } else if ( i % 5 === 0) {
      pingArray.push("pong");
    } else {
      pingArray.push(i);
    }
    };
    return pingArray;
};


$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var result = userNumber(input);
      result.forEach(function(number) {
    $("#output").append("<li>" + number + "</li>")
    });
    $("#result").show();
  });
});
