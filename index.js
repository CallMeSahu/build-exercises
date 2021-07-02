const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];
/* 
//Print name and total marks
for(var i=0; i<studentDetails.length; i++){
  console.log("Name:", studentDetails[i].name);
  var totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
  console.log("Total marks:",totalMarks);
  console.log("------------------");
} 

// Total marks is highest 
var toppersMarks = studentDetails[0].maths + studentDetails[0].science + studentDetails[0].english + studentDetails[0].computer;
var toppersName = studentDetails[0].name;
for(var i=0; i<studentDetails.length; i++){
  var totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
  if(totalMarks > toppersMarks){
    toppersMarks = totalMarks;
    toppersName = studentDetails[i].name;
  }    
}
console.log("Topper's Name:",toppersName);
console.log("toppersMarks", toppersMarks); 


//Lowest Marks
var lowestMarks = studentDetails[0].maths + studentDetails[0].science + studentDetails[0].english + studentDetails[0].computer;
var lowestName = studentDetails[0].name;
for(var i=0; i<studentDetails.length; i++){
  var totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
  if(totalMarks < lowestMarks){
    lowestMarks = totalMarks;
    lowestName = studentDetails[i].name;
  }    
}
console.log("Lowest Scorer:",lowestName);
console.log("Marks Scored", lowestMarks); 


//Average marks in computer science
var totalMarks = 0;
var totalstudents = 0;
for(var i=0; i<studentDetails.length; i++){
  totalMarks += studentDetails[i].computer;
  totalstudents++;
}
var averageInCS = totalMarks/totalstudents;
console.log("Average Marks in computers:", averageInCS);*/

//Grade, Pass or Fail
const maxMarks = 400;
var passedStudents = [];
for(var i=0; i<studentDetails.length; i++){
  var totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer; 
  var percentage = (totalMarks/maxMarks)*100;
  var grade = "";
  if(percentage>=75){
    grade = "A";
  }
  else if(percentage>=60 && percentage<75){
    grade = "B";
  }
  else if(percentage>=35 && percentage<60){
    grade = "C";
  }
  else if(percentage<35){
    grade="D";
  }
  console.log("Name:",studentDetails[i].name);
  console.log("Student Grade:", grade);
  console.log("-----------------------")
  if(percentage>35){
    passedStudents.push(studentDetails[i].name);
  }
}
console.log("***PASSED STUDENTS***")
for(var i=0; i<passedStudents.length; i++){
  console.log(passedStudents[i]);
}



