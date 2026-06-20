document.getElementById("soundButton").addEventListener("click",function(){

    const animalName = document.getElementById("animalInput").value.toLowerCase();

    const output = document.getElementById("soundOutput");

   switch(animalName)
   {
    case "dog":
        output.textContent ="woof hahah woof";
        break;
     case "cat":
        output.textContent ="meow yayya meow";
        break;
    case "duck":
        output.textContent ="quack kikiki quack";
        break;
    case "sheep":
        output.textContent ="BA blah blah  BA ";
        break;
        
    default:
         output.textContent = "Sorry I don't know that animal sound";

   }



});

// button click 
 // fucntion run now inside fun whatt will happen is user types a name ok and i have to 
 // and i have to get that name 