//Addition
function addTwoNum(a, b){
  var x = +a + +b;
  return x;
}

var addButton = document.getElementById("addButton");

addButton.addEventListener("click", function(){
  var firstAddNum = document.getElementById("firstAddNum").value;
  var secondAddNum = document.getElementById("secondAddNum").value;
  var answerBar = document.getElementById("answerBar");
  var x = addTwoNum(firstAddNum, secondAddNum);
  answerBar.textContent = "These two numbers added together is: " + x;
});

//Subtraction
function subTwoNum(a, b){
  var x = +a - +b;
  return x;
}

var subButton = document.getElementById("subButton");

subButton.addEventListener("click", function(){
  var firstSubNum = document.getElementById("firstSubNum").value;
  var secondSubNum = document.getElementById("secondSubNum").value;
  var answerBar = document.getElementById("answerBar");
  var x = subTwoNum(firstSubNum, secondSubNum);
  answerBar.textContent = "These two numbers subtracted is: " + x;
});

//Multiplication
function mulTwoNum(a, b){
  var x = +a * +b;
  return x;
}

var mulButton = document.getElementById("mulButton");

mulButton.addEventListener("click", function(){
  var firstMulNum = document.getElementById("firstMulNum").value;
  var secondMulNum = document.getElementById("secondMulNum").value;
  var answerBar = document.getElementById("answerBar");
  var x = mulTwoNum(firstMulNum, secondMulNum);
  answerBar.textContent = "These two numbers subtracted is: " + x;
});