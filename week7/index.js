let title = document.getElementById("title");
let desc = document.getElementById("description");
let sub = document.getElementById("sub");
let output = document.getElementById("to-dos");
let form = document.getElementById("form");
let todoList = [];

//Creating Todo On List
let addTodoItem = () => {
    if (title.value != ""){
      var x = document.createElement("li");
      var z = document.createElement("button");
      z.textContent = "Delete";
      z.classList.add("del");
      x.innerHTML = "Title: " + title.value + "----------" + "Description: " + desc.value;
      todoList.push(x);
      x.append(z);
      output.append(x);
      form.reset();
    } else {
      alert("You must enter something.")
    }
};

sub.addEventListener("click", addTodoItem);

output.addEventListener('click',function(e){
let deleteBtn = document.getElementsByClassName("del");
for(i=0; i<deleteBtn.length; i++){
  if(e.target == deleteBtn[i]){
    let x = deleteBtn[i].parentNode;
    output.removeChild(x);
  }
}
});