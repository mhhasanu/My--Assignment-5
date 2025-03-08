document.getElementById("new-btn").addEventListener("click",function(){
  window.location.href = "./qusetion.html";
})

document.getElementById("clear-history").addEventListener("click",
  function(){
    handleToggle("add-task","none")
  })

  document.getElementById("return-btn").addEventListener("click",function(){
    window.history.back = "./index.html";
  })