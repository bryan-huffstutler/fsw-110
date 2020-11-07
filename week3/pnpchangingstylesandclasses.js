//step 2
for (i=0; i < 5; i++){
  var head5 = document.createElement("h2");
  head5.textContent = "I am an h2!";
  document.body.appendChild(head5);
}

//step 3
var y = document.querySelectorAll("h2");
for (i = 0; i < y.length; i++) {
  y[i].style.fontSize = "20px";
  y[i].style.fontWeight = "lighter";
  y[i].style.fontFamily = "sans-serif";
  y[i].style.color = "cornflowerblue";
}

//step 5
var x = document.querySelectorAll("h2");
for (i = 0; i < x.length; i++) {
  x[i].classList.add("border");
}