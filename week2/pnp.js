var header = document.createElement("h1")
header.textContent = "Welcome to my JS site";
document.body.append(header);
header.style.color = "blue";
header.style.fontSize = "3em";

var back = document.body;
back.style.backgroundColor = "lightslategray";

var para = document.createElement("p");
para.textContent = "All of this was created with Javascript";
para.style.fontSize = "2em";
para.style.lineHeight = "2.5em";
document.body.append(para);

var newOl = document.createElement("ol");
newOl.textContent = "My new ol";
newOl.style.lineHeight = "2em";
var firstLi = document.createElement("li");
firstLi.textContent = "First LI";
newOl.append(firstLi);

var secondLi = document.createElement("li");
secondLi.textContent = "Second LI";
newOl.append(secondLi);

var thirdLi = document.createElement("li");
thirdLi.textContent = "Third LI";
newOl.append(thirdLi);

document.body.append(newOl);