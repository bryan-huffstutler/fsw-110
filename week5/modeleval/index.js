
var name1 = document.getElementById("name");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var button = document.getElementById("submit");
var myForm = document.getElementById("myForm");

button.addEventListener("click", function(){
  alert("Hello " + name1.value + ", you are " + age.value + " and you're a " + gender.value); myForm.reset();
});
//Styling
document.body.style.backgroundColor = "red";
