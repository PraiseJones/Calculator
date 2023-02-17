var equalChangeBg = document.getElementById("equal");
var colors = [
    "rgb(255, 28, 11)",
    "rgb(115, 253, 153)",
    "rgb(120, 141, 243)",
    "rgb(19, 241, 100)",
    "rgb(228, 223, 188)",
    "rgb(58, 147, 251)",
    "rgb(27, 177, 88)",
    "rgb(232, 104, 199)",
    "rgb(219, 81, 9)",
    "rgb(161, 173, 119)",
    "rgb(245, 81, 48)",
    "rgb(246, 243, 239)",
];

equalChangeBg.addEventListener("click", function () {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;

  var changeOperator = document.getElementsByClassName("operators");

  for (var i = 0; i < changeOperator.length; i++) {
    changeOperator[i].style.color = randomColor;
  }

  var borderChange = document.getElementById("display");

  borderChange.style.borderColor = randomColor;
});
