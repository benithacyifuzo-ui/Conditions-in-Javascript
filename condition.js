//if... else if /else if

const temperature = 24;

if (temperature < 15) {
  console.log("Cold — take a jacket.");
}

else if (temperature <= 25) {
  console.log("Pleasant weather.");
}

 else {
  console.log("Hot — drink water.");
}

let marks =90;

if(marks >=80) {
    console.log("Grade A");
}

else if(marks >=70){
   console.log("Grade B"); 
}

else if(marks >=60){
   console.log("Grade C"); 
}

else if(marks >=50){
   console.log("Grade D"); 
}

else{
    console.log("Failed");
}

let Authenticated = true;
let isAdmin = true;

if(Authenticated === true && isAdmin === true){
    console.log("Welcome Admin");
}

else if(Authenticated === true && isAdmin === false){
    console.log("Welcome User");
}

else{
    console.log("Please login");
}


const age = 18;
const hasTicket = false;
const isVip = false;

if (age >= 18 && hasTicket) console.log("Entry allowed");
if (isVip || hasTicket) console.log("Has access");
if (!isVip) console.log("Standard seat");

//Ternary Operator
const score = 64;
const result = score >= 50 ? "Pass" : "Fail";
console.log(result);

let userNames ="Benitha";
let hours ="12hrs";

const message = hours === "12hrs" ? `Hello ${userNames} What are we doing today this afternoon` : `Hello ${userNames} What are we doing today`;
console.log("message");

// We study three days a week

let studyDays = "Friday"; 

switch (studyDays) {
  case "Tuesday":
    console.log("We study on Tuesday");
    break;
  case "Wednesday":
    console.log("We do revision on Wednesday");
    break;
  case "Thursday":
    console.log("We practice coding on Thursday");
    break;
  case "Friday":
    console.log("We take a weekly quiz on Friday");
    break;
  case "Saturday":
    console.log("We build a small project on Saturday");
    break;
  case "Sunday":
    console.log("We rest and plan for next week on Sunday");
    break;
  default:
    console.log("No study activities scheduled for this day");
}






