var block = document.getElementById("block");
block.style.border = "2px solid black";

block.addEventListener("mouseover", function(){
  block.style.backgroundColor = 'blue';
})

block.addEventListener("mousedown", function(){
  block.style.backgroundColor = 'red';
})

block.addEventListener("mouseup", function(){
  block.style.backgroundColor = 'yellow';
})

block.addEventListener("dblclick", function(){
  block.style.backgroundColor = 'green';
})

window.addEventListener("scroll", function(){
  block.style.backgroundColor = 'orange';
})

var foot = document.body.querySelector('footer');
foot.style.marginTop = "1000px";