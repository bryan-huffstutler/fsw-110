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

document.addEventListener("keydown", function(event){
  if (event.code == 'KeyB'){
    block.style.backgroundColor = 'blue';
  } else  if (event.code == 'KeyR'){
    block.style.backgroundColor = 'red';
  } else if (event.code == 'KeyY'){
    block.style.backgroundColor = 'yellow';
  } else if (event.code == 'KeyG'){
    block.style.backgroundColor = 'green';
  } else if (event.code == 'KeyO'){
    block.style.backgroundColor = 'orange';
  } else {
    console.log("Why doesn't this work???");
  }
})


var foot = document.body.querySelector('footer');
foot.style.marginTop = "1000px";