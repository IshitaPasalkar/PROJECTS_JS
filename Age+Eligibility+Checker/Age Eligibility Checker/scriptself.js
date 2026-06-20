
document.getElementById("checkButton").addEventListener("click", function () {
  
  const ageValue = parseInt(document.getElementById("ageInput").value);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if(ageValue>=16)
  {
   resultDiv.innerHTML += "You are eligible to drive <br/>";
  }
  else
  {
    resultDiv.innerHTML += "You are not eligible to drive <br/>";
  }

  if(ageValue>=18)
  {
    resultDiv.innerHTML += "You are eligible to vote <br/>";
  }
else{
    resultDiv.innerHTML += "You are not eligible to vote <br/>";
}

if(ageValue>=21)
{
    resultDiv.innerHTML += "You are eligible to drink <br/>";
}
else{
    resultDiv.innerHTML += "You are  not eligible to drink <br/>";
}

});