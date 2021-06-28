var readlineSync = require('readline-sync');

//Sum of two numbers
var num1 = parseInt(readlineSync.question("Input Number 1: "));
var num2 = parseInt(readlineSync.question("Input Number 2: "));
var sum = num1 + num2;
console.log("Sum:",sum); 

//Calculate simple interest
var principle = parseInt(readlineSync.question("P="));
var rate = parseInt(readlineSync.question("R="));
var time = parseInt(readlineSync.question("T="));
var spit = (principle*time*rate)/100;
console.log(spit); 

//Kinetic energy
var mass = parseInt(readlineSync.question("m="));
var volume = parseInt(readlineSync.question("v="));
var kenergy = 0.5*mass*volume*volume;
console.log(kenergy);

//Convert Farhenheit to Celsius
var temperature = parseInt(readlineSync.question("Enter temperate in Farhenheit:"))
temperature = (temperature-32)*(5/9);
console.log(temperature.toFixed(5));

//Cube parameters
var side = parseInt(readlineSync.question("Enter side a: "));
console.log("Area:", side*side);
console.log("Perimeter:", 4*side);
console.log("Surface Area:", 6*side*side);
console.log("Volume:", side*side*side);

//Profit Loss
var costp = parseInt(readlineSync.question("CP= "));
var sellp = parseInt(readlineSync.question("SP= "));
if(sellp <= costp){
  console.log(costp-sellp, "Loss");
}
else{
  console.log(sellp-costp, "Profit");
}

//Sum of N numbers
var num = parseInt(readlineSync.question("Enter a positive integer: "));
var sum = 0;
for(var i=1; i<=num; i++){
  sum += i;
}
console.log("Sum =",sum);

// Print N odd numbers
var num = parseInt(readlineSync.question("Input: "));
var output = 1;
console.log("Output:",output);
for(var i=1; i<num; i++){
  output += 2;
  console.log(output);
}

//Sum of Digits
var num = parseInt(readlineSync.question("Enter number: "));
var sum = 0;
while(num > 0){
  var digit = (num%10);  
  num = Math.floor(num/10);
  sum += digit;
}
console.log("Sum:",sum);

//Reverse a number
var num = parseInt(readlineSync.question("Enter a number: "));
var reverse = 0;
while(num != 0){
  var digit = num%10;
  reverse  = reverse * 10 + digit;
  num = Math.floor(num/10);
}
console.log(reverse); 

// Rotate a number
var num = parseInt(readlineSync.question("Enter a Number: "));
var rotation = parseInt(readlineSync.question("Enter the number of Rotations: "));

var temp = num;
var nod = 0; //nod -> number of digits
while(temp > 0){
  nod++;
  num = Math.floor(num/10);
}
rotation = rotation % nod;
if(rotation < 0){
  rotation = rotation + nod;
}

var mul = 1;
var div = 1;
for(var i=1; i<=nod; i++){
  if(i <= rotation){
    div *= 10;
  }
  else{
    mul *= 10;
  }
}

var quo = num / div;
var rem = Math.floor(num % div);
var result = rem*mul + quo; 

console.log("Result:",result);*/

//Decimal to Binary
var num = parseInt(readlineSync.question("Enter Number in Decimal: "));
var revbin = 0;
var nod = 0;

while(num>0){
  var digit = Math.floor(num%2);
  revbin = revbin*10 + digit;
  num = num/10;
  nod++;
}

var bin = 0;
while(nod > 0){
  var digit = Math.floor(revbin%10);
  var bin = bin*10 + digit;
  nod--;
}

console.log(bin);

