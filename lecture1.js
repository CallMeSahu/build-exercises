var readlineSync = require('readline-sync');
//Output Your name
console.log("Siddhartha");

//Read name of your user
var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name? ");

//Welcome your user
console.log("Welcome "+ userName);

// Do it all together

//Print right or wrong if greater than 25
var userAge = readlineSync.question("What is your age?");
if(userAge >= 25){
  console.log("right");
}
else{
  console.log("wrong");
}

//Increment score if answer is right
var score = 0;
var answer = "mumbai";
userAnswer = readlineSync.question("Where do you live?");
if(userAnswer === answer){
  score++;
}
console.log(score);

//Function to add two numbers
function add(num1, num2){
  return num1+num2;
}

var result = add(50,20);
console.log(result);

//Function to check the answer
function checkAnswer(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("correct");
  }
  else{
    console.log("wrong");
  }
}
checkAnswer("Where do I live?", "mumbai")

//Print your name 5 time
for(var i=1; i<=5; i++){
  console.log("Siddhartha");
} 

//Star pattern
for(var i=1; i<=5; i++){  
  var outstr = "";
  for(var j=1; j<=i; j++){
    outstr = outstr + "*";
  }
  console.log(outstr);
} 

//list grocery items to buy
var groceryList = ["eggs", "bread", "butter", "sauce", "juice"];
console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[groceryList.length-1]); 

//print every item on the list
var groceryList = ["eggs", "bread", "butter", "sauce", "juice"];
for(var i=0; i<=groceryList.length-1; i++){
  console.log(groceryList[i]);
}

//club info about super hero together
var superman={
  power: "100",
  intelligence: "50"
};

var batman={
  power: "50",
  intelligence: "100"
};

console.log(batman.power);
console.log(superman.intelligence);
if(batman.power > superman.power){
  console.log("batman wins");
}
else{
  console.log("superman wins");
}

//Put a list of questions together
var questionsList = [
  question1 = {
    question: "What is my last name?",
    answer: "sahu"
  },

  question2 = {
    question: "Where do I live?",
    answer: "mumbai"
  }
];

console.log(questionsList[1].question);
console.log(questionsList[1].answer);

