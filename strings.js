/*//Convert to UpperCase
var str = "siddhartha";
str = str.toUpperCase();
console.log(str);*/

//Join two strings
function joinStrings(str1, str2){
  return str1.concat(str2);
}

//Count number of characters
function countCharacters(str){
  var count = 0;
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) != " "){
      count++;
    }
  }
  return count;
}

//Convert String to integer
function convertNum(str){
  return parseInt(str);
}

//Remove Vowels
function removeVowels(str){
  var result = "";
  for(var i=0; i<str.length; i++){
    if(str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u"){
      result += str[i];
    }
  }
  return result;
}

//Alphanumeric Check
function isAlphaNumeric(str){
  str = str.toUpperCase();  
  for(var i=0; i<str.length; i++){
    var code = str.charCodeAt(i);
    if(
      !(code>=48 && code<=57)//Numeric check
      && !(code>=65 && code<=90)//Uppercase check      
    ){
      return false;
    }
  }
  return true;
}

//Print longest and shortest
function compareString(str1, str2, str3){
  var len1 = str1.length;
  var len2 = str2.length;
  var len3 = str3.length;
  //Print longest
 if(len1>len2){
   if(len1>len3){
     //str1 is longest
     console.log("Longest:", str1);
   }
   else{
     //str3 is longest
     console.log("Longest:", str3);
   }
 }
 else{
   if(len2>len3){
     //str2 is longest
     console.log("Longest:", str2);
   }
   else{
     //str 3 is longest
     console.log("Longest:", str3);
   }
 }

//Print shortest
if(len1<len2){
   if(len1<len3){
     //str1 is shortest
     console.log("Shortest:", str1);
   }
   else{
     //str3 is shortest
     console.log("Shortest:", str3);
   }
 }
 else{
   if(len2<len3){
     //str2 is shortest
     console.log("Shortest:", str2);
   }
   else{
     //str 3 is shortest
     console.log("Shortest:", str3);
   }
 }
}

//Number of vowels and consonents
function countCharacterType(str){
  str = str.toLowerCase();
  var vowels=0, cons=0;
  for(var i=0; i<str.length; i++){
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
      vowels++;
    }
    else if(str[i] == " "){

    }
    else{
      cons++;
    }
  }
  console.log("Vowels:", vowels, "Consonents:", cons);
}

//Check string length
function checkStringLength(str){
  var strlen = 0;
  str = str + "\0";
  for(var i=0; str[i] != "\0"; ++i){
    strlen++;
    console.log(strlen);
  }
  if(strlen > 7){
    return true;
  }
  return false;
}

//Copy smaller string into bigger string
function stringCompare(str1, str2){
  var len1 = str1.length;
  var len2 = str2.length;
  var result = "";
  if(len1>len2){
    result = str1.concat(str2);
  }
  else{
    result = str2.concat(str1);
  }
  return result;
}

//Palindromic string
function checkPalindrome(str){
  var strev = str.split("").reverse().join("");
  if(strev == str){
    return true;
  }
  return false;
}

//Mask characters
function maskChar(str){
  var stres = "";
  for(var i=0; i<str.length; i++){
    if(i<str.length-4)
      stres += "#"
    else
      stres += str[i];
  }
  return stres;
}

// First six capital case 
function firstSix(str){
  var result=""
  var charCount = 0;
  for(var i=0; i<str.length; i++){
    if(str[i] != " "){
      charCount++;
    }
    if(charCount <= 6){
      result += str[i].toUpperCase();
    }
    else{
      result += str[i];
    }
  }
  return result;
}

//Replace character in string
function replaceChar(str, c1, c2){
  var stres = "";
  for(var i=0; i<str.length; i++){
    if(str[i] == c1){
      stres += c2;
    }
    else{
      stres += str[i];
    }
  }
  return stres;
}

// Remove spaces
function removeSpace(str){
  var strnew = "";
  for(var i=0; i<str.length; i++){
    if(str[i] != " "){
      strnew += str[i];
    }
  }
  return strnew;
}

//Reverse String wordwise
function reverseWordWise(str){
  var splitString = str.split(" ");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join(" ");
  return joinArray;
}

//Toggle Case characters
function toggleCase(str){
  var newString = "";
  for(var i=0; i<str.length; i++){
    if(i%2 == 0){
      newString += str[i].toUpperCase();
    }
    else{
      newString += str[i];
    }
  }
  return newString;
}

//Remove specific word
function removeWord(str, word){
  var splitString = str.split(" ");
  var newArray = [];
  for(var i=0; i<splitString.length; i++){
    if(splitString[i] != word){
      newArray.push(splitString[i]);
    }
  }
  var newString = newArray.join(" ");
  return newString;
}

//Max repeating character
function maxChar(str){
  var maxKey = str[0];
  var maxCount = 0;
  for(var i=0; i<str.length; i++){
    var key = str[i];
    var count = 0;
    for(var j=0; j<str.length; j++){
      if(str[j] == key){
        count++;
      }
    }
    if(count > maxCount){
      maxCount = count;
      maxKey = key;
    }
  }
  return maxKey;
}

