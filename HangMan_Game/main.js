const letters="abcdefghijklmnopqrstuvwxyz";
//get array from arrays
let lettersarray=Array.from(letters);

// select letters container 
let lettersContainer=document.querySelector(".letters");

//generate letters
lettersarray.forEach(letter =>{
    //create span
    let span = document.createElement("span");

    //create letter text node
    let theletter=document.createTextNode(letter);
    
    //append the letter to span
    span.appendChild(theletter);

    //add class to span
    span.className="letter-box";

    //append span to the letter containers
    lettersContainer.appendChild(span);
});
// object of words and categories
const words={
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
// get random property
let allkeys=Object.keys(words);

// random number depend on keys length
let randompropertynum=Math.floor(Math.random() * allkeys.length);

// category
let randompropertyname=allkeys[randompropertynum];

 //category words 
let randompropertyvalue=words[randompropertyname];

//random numbers depend on words
let randomvaluenum = Math.floor(Math.random() * randompropertyvalue.length);
let randomvaluevalue = randompropertyvalue[randomvaluenum];

//set category information
document.querySelector(".game-info .category span").innerHTML = randompropertyname;

//select letters guess elements
let lettersGuesscontainer = document.querySelector(".letters-guess");

//convert choosen word to array
let lettersandspace = Array.from(randomvaluevalue);

//create span depend on word
lettersandspace.forEach(letter=>{

    //create empty span
    let emptyspan=document.createElement("span");
    //if letter is space
    if(letter ===' ')
    {
        //add class to span
        emptyspan.className="with-space";

    }

    //append span to the letter guess container
    lettersGuesscontainer.appendChild(emptyspan);

});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {

  // Set The Choose Status
  let theStatus = false;

  if (e.target.className === 'letter-box') {

    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(randomvaluevalue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {

      // If The Clicked Letter Equal To One Of The Chosen Word Letter
      if (theClickedLetter == wordLetter) {

        // Set Status To Correct
        theStatus = true;

        // Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {

          if (WordIndex === spanIndex) {

            span.innerHTML = theClickedLetter;

          }

        });

      }

    });

    // Outside Loop

     // If Letter Is Wrong
    if (theStatus !== true) {

        // Increase The Wrong Attempts
        wrongAttempts++;
  
        // Add Class Wrong On The Draw Element
        theDraw.classList.add(`wrong-${wrongAttempts}`);
  
        // Play Fail Sound
        document.getElementById("fail").play();
  
        if (wrongAttempts === 8) {
  
          endGame();
  
          lettersContainer.classList.add("finished");
  
        }
  
      } else {
  
        // Play Success Sound
        document.getElementById("success").play();
  
      }
  
    }

 

});

//end game function
function endGame()
{
    //create popup div
    let div=document.createElement("div");
    //create text
    let divtext=document.createTextNode(`Game is over ,the word is ${randomvaluevalue}`);
    //append text to div
    div.appendChild(divtext);
    //dd class on div
    div.className='popup';

    //append to the body
    document.body.appendChild(div);
}
  
    
