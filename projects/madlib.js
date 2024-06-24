alert("Welcome to Our Mad Lib! Please follow the prompts to make it.");

//this code asks for the player's name/username!
var firstPrompt = prompt("give me a noun(person)");

//game that the player will be playing
var secondPrompt = prompt("give me a noun(game)");

//an adjective of any kind!
var thirdPrompt = prompt("give me an adjective");

//an adverb is asked for the story
var fourthPrompt = prompt("give me an adverb");

//the prize for playing
var fifthPrompt = prompt("give me a noun");

//the whole madlib structure with concatenation and the format of the font
document.write("<span style=\"font-family: 'Roboto Mono', monospace; color: green; position: absolute; left: 33%; top: 40%;\">" + "Welcome to the retro-gaming arcade, " + firstPrompt + "! <br>" + "Today, anyone who beats the high score in " + secondPrompt + " wins a prize! <br>" + "You have to be a " + thirdPrompt + " person! <br>" + "Woah, you almost beat the high score, " + fourthPrompt + "! <br>" + "Great job, you won a " + fifthPrompt + "! </span>");
