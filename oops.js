//Question 1
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
console.log("Average Marks in computers:", averageInCS);

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

//Question 2
 class Employee {
  constructor(name, id, basicSalary, hra, allowance){
    this.name = name;
    this.id = id;
    this.basicSalary = basicSalary;
    this.hra = hra;
    this.allowance = allowance;
  }

  getSalary(){
    return this.basicSalary+this.hra+this.allowance;
  }
}

const siddhartha = new Employee("Siddhartha", "#001", 30000, 5000, 2000);
const rahul = new Employee("Rahul", "#002", 25000, 7000, 3500);

console.log("Rahul's Net Salary:",rahul.getSalary());
console.log("Siddhartha's Net Salary:",siddhartha.getSalary()); 

//Question 3
class BankAccount {
  constructor(name, number, balance, type, ifsc){
    this.name = name;
    this.number = number;
    this.balance = balance;
    this.type = type;
    this.ifsc = ifsc;
  }
}

const haramal = new BankAccount("Haramal", "#0010", 50490, "currents", "SBI#00123");
const siddhartha = new BankAccount("Siddhartha", "#0020", 15400, "savings", "SBI#00123");
const wayne = new BankAccount("Wayne", "#0070", 20480, "savings", "SBI#00123");

console.log("Customer Name:", haramal.name);
console.log("Account Balance:",haramal.balance);
console.log("------------------------");
console.log("Customer Name:", siddhartha.name);
console.log("Account Balance:",siddhartha.balance);
console.log("------------------------");
console.log("Customer Name:", wayne.name);
console.log("Account Balance:",wayne.balance);
console.log("------------------------");

//Question 4
const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];

//Total no. of Items
var noOfitems = 0;
for(var i=0; i<cartItems.length; i++){
  noOfitems += cartItems[i].count;
}
console.log("Total Items:", noOfitems);

// Total cart Value
var cartValue = 0;
for(var i=0; i<cartItems.length; i++){
  cartValue += cartItems[i].count * cartItems[i].price;
}
console.log("Total Price: ₹"+cartValue.toFixed(2));

//Total discounted Value
var discountedValue = 0;
for(var i=0; i<cartItems.length; i++){
  discountedValue += cartItems[i].count *cartItems[i].discount;
}
console.log("Total Discount: ₹"+discountedValue.toFixed(2));

var totalTax = 0;
totalTax = ((cartValue-discountedValue)*0.18);
console.log("Total Tax: ₹"+totalTax.toFixed(2));


