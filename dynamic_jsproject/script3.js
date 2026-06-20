const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const title = document.querySelector(".title");
const resetBtn = document.querySelector(".reset");
const bodyEl = document.querySelector("body");

btn1El.addEventListener("click", function () {
    bodyEl.style.backgroundColor = "pink";
});

btn2El.addEventListener("click", function () {
    title.style.fontSize = "90px";
});

resetBtn.addEventListener("click", function () {
    bodyEl.style.backgroundColor = "";
    title.style.fontSize = "30px";
});
//Event listeners

