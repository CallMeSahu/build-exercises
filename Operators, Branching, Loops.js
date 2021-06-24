var readlineSync = require('readline-sync');
//Add number 5
var num1=5, num2=13, num3=21, num4=21, num5=45;
var sum = num1+num2+num3+num4+num5;
console.log(sum);

//Determine odd or even
var input = readlineSync.question("Enter a number ");
if(input == 0){
  console.log('neither even nor odd');
}
else if(input%2 === 0){
  console.log("even");
}
else{
  console.log("odd");
} 

//Find maximum & minimum
const num1= 129, num2= 251;
var maximum, minimum;
if(num1>num2){
  maximum = num1;
  minimum  = num2;
}else{
  maximum = num2;
  minimum = num1;
}
console.log("Maximum: ",maximum);
console.log("Minimum: ",minimum); 

// Maximum out of three
const num1=8, num2=23, num3=17;
var maximum = num1>num2? num1>num3?num1:num3 : num2>num3?num2:num3;
console.log("Maximum: ",maximum); 

// Minimum out of three
const num1=8, num2=23, num3=17;
var minimum = num1<num2? num1<num3?num1:num3 : num2<num3?num2:num3;
console.log("Minimum: ",minimum);

// Month 31 days
var month = readlineSync.question("Enter a month ");
if((month=="january")||(month=="march")||(month=="may")||(month=="july")||(month=="august")||(month=="october")||(month=="december")){
  console.log(month," has 31 days");
}
else{
  console.log(month," does not have 31 days");
}

// Fizz Buzz
function returnArray{
  var arr = [];
for(var i=1; i<101; i++){
  if(i%15 == 0){
    arr.push("FizzBuzz");
  }
  else if(i%3 == 0){
    arr.push("Fizz");
  }
  else if(i%5 == 0){
    arr.push("Buzz");
  }
  else{
    arr.push(i);
  }
}
return arr;
}

//Star Pattern
for(var i=1; i<=5; i++){  
  var outstr = "";
  for(var j=1; j<=i; j++){
    outstr = outstr + "*";
  }
  console.log(outstr);
} 

// Multiplication table
var num = readlineSync.question("Enter a number:");
for(var i=1; i<=12; i++){
  console.log(num+" x "+i+" = "+num*i);
}

// Fibonacci series
var number = readlineSync.question("Enter a number:");
var a=0, b=1, next;
console.log(a);
console.log(b);
next = a+b;
while(next < number){
  console.log(next);
  a=b;
  b=next;
  next = a+b;
} 

//Factorial
var number = readlineSync.question("Enter a number: ");
var factorial = 1; 
for(var i=2; i<=number; i++){
  factorial = factorial * i;
}
console.log("Factorial:",factorial);

//Prime or not
var number = readlineSync.question("Enter a number: ");
var count=0;
for(var i=2; i*i<number; i++){
    if(number%i == 0){
      count++;
    }
}
if(count!=0){
  console.log(number+" is not prime");
}
else{
  console.log(number+" is prime");
}

// Weekday or Weekend
var day = readlineSync.question("Enter a day: ");
if((day=="saturday")||(day=="sunday")){
  console.log(day+" is Weekend");
}
else{
  console.log(day+" is a Weekday")
}






