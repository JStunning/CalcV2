var add = function(num1, num2) {
  return num1 + num2;
}

var multiply = function(num1, num2) {
  return num1 * num2;
}

var divide = function(num1, num2) {
  return num1 / num2;
}

var subtract = function(num1, num2){
  return num1 - num2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#outputAdd").text(result);
  });
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#outputSub").text(result);
  });
  $("form#mul").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mul1").val());
    var number2 = parseInt($("#mul2").val());
    var result = multiply(number1, number2);
    $("#outputMul").text(result);
  });
  $("form#dvd").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#dvd1").val());
    var number2 = parseInt($("#dvd2").val());
    var result = divide(number1, number2);
    $("#outputDvd").text(result);
  });
});


