
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

//Array length
function arrayLength(arr){
  return arr.length;
}

//Return Index in an array
function indexOf(arr, num){
  for(var i=0; i<=arr.length; i++){
    if(num === arr[i]){
      return i;
    }
  }
}

//Replace element in an array
function replace(arr, prev, next){
  for(var i=0; i<=arr.length; i++){
    if(arr[i] === prev){
      arr[i] = next;
    }    
  }
  return arr;
}

//Merge Arrays
function mergeArray(arr1, arr2){
  var mergedArray = arr1.concat(arr2);
  return mergedArray;
}

//CharAt
function charAt(str, pos){
  return str.charAt(pos);
}

// Date compare
function minDate(d1, d2){
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if(date1 >= date2){
      return d2
    } else if(date1 < date2){
      return d1
    }
}

//Encode String
function encodeString(message, num){
  var newMessage="";
  for(var i=0; i<message.length; i++){
    var character = message[i];

    if(character.match(/[a-z]/i)){
      newMessage += String.fromCharCode(message.charCodeAt(i)+num);
    }
    else{
      newMessage += message[i];
    }
  }
  return newMessage;
}

//Make first letter capital
function toSentenceCase(str){
  var words = str.split(" ");
  for(var i=0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

//Sort Array
function sortArray(arr){
  for(var i=0; i<arr.length; i++){
    for(var j=i; j<arr.length; j++){
      if(arr[i] > arr[j]){
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  } 
  return arr;
}

//Reverse character
function reverseCharactersOfWord(str){
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}




