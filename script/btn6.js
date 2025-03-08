document.getElementById("click-hear6").addEventListener("click",function(){
  alert("Board Updated successfully")
  const taskBtn = document.getElementById("task-btn").innerText;
  const convertedTask = parseInt(taskBtn)
  const sum = convertedTask - 1;
  document.getElementById('task-btn').innerText = sum;
  const borderbtn =document.getElementById("border-btn").innerText;
const convertedborderbtn = parseInt(borderbtn)
const sum2 = convertedborderbtn + 1;
document.getElementById('border-btn').innerText = sum2;
const addTask =document.getElementById("add-task");
const newText =document.createElement("p");
newText.innerText="You have Complete The Task Add Dark Mode at 12:48:15 PM";
addTask.appendChild(newText);
handleToggle("click-hear6","none")
})