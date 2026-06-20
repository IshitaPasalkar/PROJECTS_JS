const randomNumber = Math.floor(Math.random()*10+1);
const feedback = document.getElementById("feedback");
let userGuess;

// event 
document.getElementById("guessBtn").addEventListener("click", function()
{
    userGuess = parseInt(document.getElementById("guessInput").value);
     guessCheck(); 
});

function guessCheck()
{
    while(userGuess!==randomNumber)
    {
        if(userGuess<randomNumber)
        {
            feedback.textContent="low try again";
        }
        else if (userGuess > randomNumber) 
            {
      feedback.textContent = "Too high! Try again.";
    }
    return; 
    }
     feedback.textContent = "Bravo! You guessed the correct number!";
}