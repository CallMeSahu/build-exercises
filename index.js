
//a Power b
function power(a, b){
  var pow = 1;
  for(var i=1; i<=b; i++){
    pow = pow*a;
  }
  return pow;
} 

//Area of hexagon
function areaOfHexagon(len){
  return ((2.598)*(len*len)).toFixed(2);
}

//Number of words
function noOfWords(sentence){
  var count=0;
  for(var i=1; i<=sentence.length; i++){
    if((sentence.charAt(i) === " ")&&(sentence.charAt(i+1) !== " ")){
      count++;
    }
  }
  count++ //To account for last word
  return count;
} 

//Find Minimum
function findMin(...numbers){
  return numbers.reduce(function (a,b){
    return a<b?a:b;
  })
}

//Find Maximum
function  findMax(...numbers){
  return numbers.reduce(function(a,b){
    return a>b?a:b;
  })
}

//Type of triangle
function typeOfTriangle(a, b, c){
  if(a+b+c != 180){
    return "Not a Triangle";
  }
  else{
    if((a==b)&&(b==c)&&(c==a)){
      return "Equilateral Triangle";
    }
    else if((a==b)||(b==c)||(c==a)){
      return "Isoscales Triangle";
    }
    else{
      return "Scalen Triangle";
    }
  }
}
