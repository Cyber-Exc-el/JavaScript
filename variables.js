/*Variables*/
//original javascript syntax
var height;
var weight;
console.log(height);
console.log(weight);

//new javascript syntax
let _height;
let _weight;
console.log(_height);
console.log(_weight);

//
let hheight = 12;
let anotherheight = hheight;
console.log(hheight);
console.log(anotherheight);
let wweight = 20
console.log(wweight);
let anotherweight = wweight;
console.log(anotherweight);
let aanotherweight = anotherweight;
console.log(aanotherweight);
console.log('height');
console.log('weight');

//changing variables
let red = 1;
console.log(red);
red = 3
console.log(red);
red = red + 100;
console.log(red);

//Typed
let greeting = "Hello!";
let coun_ter = 100;
console.log(counter)
console.log(greeting);
console.log(greeting);
greeting = greeting + coun_ter;
console.log(greeting);


//constant
const gree_ting = "hello world!";
console.log(gree_ting)

//Program Block
let height_ = 20;
let weight_ = 30
{
     let weight_ = 10;
     {
          console.log(height_ + weight_);
     }
     
}
console.log(height_ + weight_);

var  _he_ight  =  180;
{
         var  _we_ight  =  70;
       {
          console.log(_he_ight);  
          console.log(_we_ight);
       }  
}
console.log(_he_ight);  
console.log(_we_ight); 



let c_ounter = 30;
console.log(c_ounter)
{
     counter = 40;
     console.log(c_ounter);
}

console.log(c_ounter);




let co_unter = 30;
console.log(counter);
{
     let counter = 40;
     console.log(co_unter);
}
console.log(co_unter);




var counter = 30;

function num() {
     var counter = 40;
     console.log(counter);
}

console.log(counter);
num();
console.log(counter);

/*
Question 1
Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:

the price of a single rose (8) and the number of roses you have (70)
the price of a single lily (10) and the number of lilies you have (50)
the price of a single tulip (2) and the number of tulips you have (120)
Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. Insert the corresponding values into the variables using the variables declared in the previous step. Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). Display all inventory information in the console in the following form:

Output
Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300
*/
//Price of a single flower
let priceOf_rose = 8;
let priceOf_lily = 10;
let priceOf_tulip = 2;

//Quantity Of flowers
let quantityOf_rose = 70;
let quantityOf_lily = 50;
let quantityOf_tulip = 120;

//Total value of each flower
let valueOf_rose = priceOf_rose * quantityOf_rose;
let valueOf_lily = priceOf_lily * quantityOf_lily;
let valueOf_tulip = priceOf_tulip * quantityOf_tulip;

//Total Assest
let totalA_ssest = valueOf_lily + valueOf_rose + valueOf_tulip;
console.log("Rose - Unit Price: ", priceOf_rose, "Quantity: ", quantityOf_rose, " Value", valueOf_rose);
console.log("Lily - Unit Price: ", priceOf_lily, "Quantity: " , quantityOf_lily, " Value: ", valueOf_lily);
console.log("Tulip - Unit Price: ", priceOf_tulip, "Quantity: ", quantityOf_tulip, " Value: ", valueOf_tulip);
console.log("Total: " + totalA_ssest);







/*
Question 2: Modify the code from the previous example.

Assume that the prices of flowers will be constant (they will not change). 
Declare and initialize the remaining variables in the same way as in the previous example. 
Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30.

Display all the collected information in the console again.

*/
//Price of a single flower is constant
const priceOfRose = 8;
const priceOfLily = 10;
const priceOfTulip = 2;

//Quantity Of flowers
let quantityOfRose = 70;
let quantityOfLily = 50;
let quantityOfTulip = 120;

//Total value of each flower
let valueOfRose = priceOfRose * quantityOfRose;
let valueOfLily = priceOfLily * quantityOfLily;
let valueOfTulip = priceOfTulip * quantityOfTulip;

//Total Assest
let totalAssest = valueOfLily + valueOfRose + valueOfTulip;
console.log("Rose - Unit Price: ", priceOfRose, "Quantity: ", quantityOfRose, " Value", valueOfRose);
console.log("Lily - Unit Price: ", priceOfLily, "Quantity: " , quantityOfLily, " Value: ", valueOfLily);
console.log("Tulip - Unit Price: ", priceOfTulip, "Quantity: ", quantityOfTulip, " Value: ", valueOfTulip);
console.log("Total: " + totalAssest);

let decrease_quantityOf_rose = quantityOfRose - 20;
let decrease_quantityOf_lily = quantityOfLily - 30;

let new_valueOfrose = decrease_quantityOf_rose * priceOfRose;
let new_valueOflily = decrease_quantityOf_lily * priceOfLily;

let totalA_ssest_ = new_valueOfrose + new_valueOflily + valueOfTulip;
console.log("Rose - Unit Price: ", priceOfRose, "Quantity: ", decrease_quantityOf_rose, " Value", new_valueOfrose);
console.log("Lily - Unit Price: ", priceOfLily, "Quantity: " , decrease_quantityOf_lily, " Value: ", new_valueOflily);
console.log("Tulip - Unit Price: ", priceOfTulip, "Quantity: ", quantityOfTulip, " Value: ", valueOfTulip);
console.log("Total: " + totalA_ssest_);






/*Scenario
Our task will be to create a list of contacts. Initially, the list will be quite simple:
 we will only write three people to it using the data shown in the table below. 
 In the rest of the course, you will return to this script and systematically extend it with new functionality, 
 using the newly learned elements of JavaScript.

Declare and initialize the variables where you will store all the information (nine variables in total). 
Display in the console information about the first and last contact in the form: name/phone/email.
*/
//Maxwell Wright
let _max_name = "Maxwell Wright";
let max_phone_no = "01917196495";
let max_email = "Curbaitur.egtatas.nccu@nonwawy.co.uk";

//Raja Villareal
let Raja_name = "Raja Villareal";
let Raja_phone_no = "08663982895";
let Raja_email = "posuere.vulputete@sed.com";

//Helen Richards
let Richard_name = "Helen Richards";
let Richard_phone_no = "0800111";
let Richard_email = "libero@convailla.edu";

//Display info
console.log("Name: ", _max_name, " Phone: ", max_phone_no, " E-Mail: ", max_email);
console.log("Name: ", Raja_name, " Phone: ", Raja_phone_no, " E-Mail: ", Raja_email);
console.log("Name: ", Richard_name, " Phone: ", Richard_phone_no, " E-Mail: ", Richard_email);