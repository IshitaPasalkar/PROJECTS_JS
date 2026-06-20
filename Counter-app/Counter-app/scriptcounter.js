let count = 0;

// select all elements 
const counterEl = document.getElementById("counter");

// increase 
document.getElementById("increaseBtn").addEventListener("click", function(){
    count++;
    counterEl.textContent = count;
});

//decrease
document.getElementById("decreaseBtn").addEventListener("click", function () {
  count--;
  counterEl.textContent = count;
});

// by ten 

document.getElementById("increaseByTenBtn").addEventListener("click",function(){
  
    count = count +10;
    counterEl.textContent = count;
});

// reset 

document.getElementById("resetBtn").addEventListener("click", function(){
     count = 0;
      counterEl.textContent = count;

});