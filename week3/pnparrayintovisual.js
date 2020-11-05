//step 2
var head = document.createElement("h1");
head.textContent = "Hello World";
document.body.appendChild(head);
head.style.fontSize = "50px";
head.style.textShadow = "3px 3px 10px";
head.style.color = "blue";

//step 3
for (i=0; i < 9; i++){
  var head = document.createElement("h1");
  head.textContent = "Hello World";
  document.body.appendChild(head);
  //step 4
  head.style.fontSize = "50px";
  head.style.textShadow = "3px 3px 10px";
  head.style.color = "blue";
}

//step 5
var arr = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

var people = document.createElement("ul");
//step 6
for (var i=0; i < arr.length; i++){
  /* var name = document.createElement("li");
  name.textContent = arr[i];
  document.people.append(name); */
  people.innerHTML += "<li>" + arr[i] + "</li>";
}

document.body.append(people);
people.style.fontSize = "20px";
people.style.color = "red";
people.style.listStyleType = "none";