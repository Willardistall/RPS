var options =["rock", "paper", "scissor"];

var userChoice; 
var choices = document.getElementsByClassName("choice");
console.log(choices);
for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    // get the comp choices
    // display choices
    //figure out winner
  });
}