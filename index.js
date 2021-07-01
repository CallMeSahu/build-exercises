//Sum of array
function addArray(arr){
  return arr.reduce((a, b) => a+b, 0);
};

//Find avarage of an array
function getArrayAverage(arr){
  return (arr.reduce((a, b)=> a+b,0))/arr.length;
};

//Maximum and minimum of array
function getMinMax(arr){
  var min=arr[0], max=arr[0];
  for(var i=0; i<arr.length; i++){
    if(arr[i] >= max){
      max = arr[i];
    }
    else if(arr[i]<min){
      min = arr[i];
    }
  }
  console.log("Maximum:",max);
  console.log("Minimum:",min);
}

//Find Median and Mode
function getMedianMode(arr){
  var median=0;
  var i = Math.floor(arr.length / 2);
  if(arr.length % 2 == 0){    
    median = parseFloat((arr[i]+arr[i+1]))/2;
  }
  else{
    median = (arr[i]);
  }
  console.log("Median:",median);
  var mode = 0;
  var maxCount=0;
  for(var i=0; i<arr.length; i++){
    var count = 0;
    for(var j=0; j<arr.length; j++){
      if(arr[i] == arr[j]){
        count++;
      }
    }
    if(count>maxCount){
      maxCount = count;
      mode = arr[i];
    }
  }
  console.log("Mode:", mode);
}

// Sum of two array
function addTwoArray(arr1, arr2){
  var sum1=0, sum2=0;
  for(var i=0; i<arr1.length; i++){
    sum1 += parseInt(arr1[i]);
  }
  for(var i=0; i<arr2.length; i++){
    sum2 += parseInt(arr2[i]);
  }
  return sum1+sum2;
}

//Shift array by x
function shiftArray(arr, x){
  var noe = arr.length;
    var newArray = [];
  for(var i=noe-1; i<=noe-1-x; i--){
    newArray.push(arr[i]);
  }
  for(var i=0; i<noe-1-x; i++){
    newArray.push(arr[i]);
  }
  return newArray;
}