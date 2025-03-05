
document.getElementById("new-btn").addEventListener("click", function () {
  const userId = "new-btn";
  window.location.href = "./script/question.html";
})




document.getElementById("click-hear").addEventListener("click", function (event) {
const taskBtn = document.getElementById("task-btn").innerText;
const convertedTask = parseInt(taskBtn)
const sum = convertedTask - 1;
document.getElementById('task-btn').innerText = sum;
})