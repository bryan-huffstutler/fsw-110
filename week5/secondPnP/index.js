var form = document.querySelector("form");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var dallas = document.getElementById("dallas");
var paris = document.getElementById("paris");
var chicago = document.getElementById("chicago");
var moscow = document.getElementById("moscow");
var vegan = document.getElementById("vegan");
var kosher = document.getElementById("kosher");
var vegetarian = document.getElementById("vegetarian");
var sub = document.getElementById("submit");
var loc = "";
var male = document.getElementById("male");
var gender = document.getElementById("female");

//Alert
sub.addEventListener("click", function(){
  alert("First Name: " + firstName.value + "\nLast Name: " + lastName.value + "\nAge: " + age.value + "\nGender: " + genderCheck() +  "\nLocation: " + getLoc() +"\nDiet Restrictions: " + ifDiet());
});

//Checking Dietary Restrictions
function ifDiet(){
  if (vegan.checked && vegetarian.checked && kosher.checked){
    return "Vegan, Vegetarian and Kosher";
  } else if (kosher.checked && vegan.checked == true){
    return "Kosher and Vegan"
  } else if (kosher.checked && vegetarian.checked == true){
    return "Kosher and Vegetarian"
  } else if (vegan.checked && vegetarian.checked == true){
    return "Vegan and Vegetarian"
  } else if (kosher.checked == true){
    return "Kosher";
  } else if (vegan.checked == true){
    return "Vegan";
  } else if (vegetarian.checked == true){
    return "Vegetarian";
  }
};

//Checking Gender
function genderCheck(){
  if (male.checked == true){
    return "Male"
  } else if (female.checked == true){
    return "Female"
  }
};

//Checking Location
function getLoc(){
  if (dallas.selected == true){
    return "Dallas"
  } else if (paris.selected == true){
    return "Paris"
  } else if (moscow.selected == true){
    return "Moscow"
  } else if (chicago.selected == true){
    return "Chicago"
  }
}