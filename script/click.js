document.getElementById("click-hear").addEventListener("click",function () {
const borderbtn =document.getElementById("border-btn").innerText;
const convertedborderbtn = parseInt(borderbtn)
const sum = convertedborderbtn + 1;
document.getElementById('border-btn').innerText = sum;
})


