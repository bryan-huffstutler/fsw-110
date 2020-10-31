//Navbar
var nav = document.createElement("navbar");
var navOl = document.createElement("ol");
navOl.style.listStyleType = "none";
navOl.style.display = "flex";
navOl.style.justifyContent = "space-around";
navOl.style.backgroundColor = "lightblue";
navOl.style.borderRadius = "10px";

//First Link
var firstItem = document.createElement("li");
var firstLink = document.createElement("a");
firstLink.href = "#";
firstLink.textContent = "Home";
firstLink.style.textDecoration = "none";
firstLink.style.fontSize = "2em";
firstItem.appendChild(firstLink);
navOl.appendChild(firstItem);
nav.appendChild(navOl);
document.body.append(nav);

//Second Link
var secondItem = document.createElement("li");
var secondLink = document.createElement("a");
secondLink.href = "#";
secondLink.textContent = "About";
secondLink.style.textDecoration = "none";
secondLink.style.fontSize = "2em";
secondItem.appendChild(secondLink);
navOl.appendChild(secondItem);
nav.appendChild(navOl);
document.body.append(nav);

//Third Link
var thirdItem = document.createElement("li");
var thirdLink = document.createElement("a");
thirdLink.href = "#";
thirdLink.textContent = "Contact";
thirdLink.style.textDecoration = "none";
thirdLink.style.fontSize = "2em";
thirdItem.appendChild(thirdLink);
navOl.appendChild(thirdItem);

//Appending Navbar to Body
nav.appendChild(navOl);
document.body.append(nav);

//H1
var head = document.createElement("h1");
head.textContent = "Basic JS Site fOoL!";
head.style.fontSize = "2em";
head.style.display = "flex";
head.style.justifyContent = "center";
head.style.color = "black";
head.style.textShadow = "5px 3px lightgray";
document.body.appendChild(head);

//Paragraph
var para = document.createElement("p");
para.textContent = "Everybody stops and stares at me These two teeth are gone as you can see I dont know just who to blame for this catastrophe But my one wish on Christmas Eve is as plain as can be All I want for Christmas is my two front teeth My two front teeth See my two front teeth Gee, if I could only have my two front teeth Then I could wish you, Merry Christmas It seems so long since I could say Sister, Susie sitting on a thistle! Gosh, oh gee, how happy Id be, if I could only whistle All I want for Christmas is my two front teeth My two front teeth See my two front teeth Gee, if I could only have my two front teeth Then I could wish you, Merry Christmas It seems so long since I could say Sister, Susie sitting on a thistle! Gosh, oh gee, how happy Id be, if I could only whistle All I want for Christmas is my two front teeth My two front teeth See my two front teeth Gee, if I could only have my two front teeth Then I could wish you, Merry Christmas";
para.style.textAlign = "center";
para.style.lineHeight = "1.5em";
para.style.border = "solid 2px black";
para.style.borderRadius = "10px";
para.style.backgroundColor = "lightgray";
para.style.margin = "30px";
para.style.marginBottom = "70px";
document.body.appendChild(para);

//List
var list = document.createElement("ul");
list.textContent = "Christmas List";
list.style.alignItems = "center";
list.style.padding = "12px";
list.style.backgroundColor = "lightgray";
list.style.listStylePosition = "inside";
list.style.border = "solid 2px black";
list.style.borderRadius = "10px";
list.style.textAlign = "center";
list.style.margin = "30px";

//First LI
var firstLI = document.createElement("li");
firstLI.textContent = "New Truck";
firstLI.style.padding = "12px";
list.appendChild(firstLI);

//Second LI
var secondLI = document.createElement("li");
secondLI.textContent = "Kids that listen";
secondLI.style.padding = "12px";
list.appendChild(secondLI);

//Third LI
var thirdLI = document.createElement("li");
thirdLI.textContent = "Two Front Teeth";
thirdLI.style.padding = "12px";
list.appendChild(thirdLI);

//Appending List to Body
document.body.appendChild(list);

//Footer
var foot = document.createElement("footer");
foot.textContent = "2020 WEBDEV STUDENT";
foot.style.textAlign = "center";
foot.style.position = "fixed";
foot.style.bottom = "20px";
foot.style.width = "100%";
foot.style.backgroundColor = "lightgray";
foot.style.border = "solid 2px black";
foot.style.borderRadius = "10px";

//Appending Footer To Body
document.body.appendChild(foot);