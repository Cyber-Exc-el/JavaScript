/*Complex Data Types*/
//Objects
let obj = {};
console.log(typeof obj);

let test_obj = {
     str: "John",
     age: 23
};
console.log(typeof test_obj);


let userProfile_1 = {
     str_1: "Excel",
     num_1: "09025175872",
     age_1: 24,
     email_1: "example@gmail.com"
};
console.log(userProfile_1.str_1);

let userProfile_2 = {
     str_2: "Ichigo Kurosaki",
     num_2: "+12049-0939-3939",
     age_2: 34,
     email_2: "ichigokurosakishinigami@yahoo.com"
};
console.log(userProfile_2.str_2);

delete userProfile_2.str_2;
console.log(userProfile_2.str_2)

//Arrays
let emptyarry = [];
console.log(emptyarry[0]);

let months = ["January", "February", "March", "April", "May", "June"];
console.log(months);

months[0] = "December";
console.log(months[0]);

let fifth = months[5];
console.log(fifth);

let jobs = [];
console.log(jobs[0]);

jobs[1] = "Software Development";
jobs[3] = "Cyber Security";

console.log(jobs[1]);
console.log(jobs[3]);


let names = [["John", "James", "Peter", "Jack", "Great", "Dan", "Josh"], ["Blessing", "Janet", "Glory", "Lisa", "Justina"], ["Reed", "Banner", "Stark"]];
console.log(names[0][0]); // --> John
console.log(names[0][1]); // --> James
console.log(names[0][2]); // --> Peter
console.log(names[0][3]); // --> Jack
console.log(names[0][4]); // --> Great
console.log(names[0][5]); // --> Dan
console.log(names[0][6]); // --> Josh
console.log(names[1][0]); // --> Blessing
console.log(names[1][1]); // --> Janet
console.log(names[1][2]); // --> Glory
console.log(names[1][3]); // --> Lisa
console.log(names[2][4]); // --> Justina
console.log(names[2][0]); // --> Reed
console.log(names[2][1]); // --> Banner
console.log(names[2][2]) // --> Stark

let maleNames = names[0]; // --> John
console.log(maleNames[0]); // --> James
console.log(maleNames[1]); // --> Peter
console.log(maleNames[2]); // --> Jack
console.log(maleNames[3]); // --> Great
console.log(maleNames[4]); // --> Dan
console.log(maleNames[5]); // --> Josh

let femaleNames = names[1];
console.log(femaleNames[0]); // --> Blessing
console.log(femaleNames[1]); // --> Janet
console.log(femaleNames[2]); // --> Glory
console.log(femaleNames[3]); // --> Lisa
console.log(femaleNames[4]); // --> Justina

let fictionalNames = names[2];
console.log(fictionalNames[0]); // --> Reed
console.log(fictionalNames[1]); // --> Banner
console.log(fictionalNames[2]); // --> Stark


let users = [{
     username_1: "Excel",
     userage_1: 23,
     useremail_1: "excel@yahoo.com",
     userphone_1: "09165234666"
}, 
{
     username_2: "Josh Bush",
     userage_2: 34,
     useremail_2: "josh7bush@gmail.com",
     userphone_2: "+2229066228"
}];
console.log(users[1].username_2);

//Adding a new user to the array
users[2] = {
     username_3: "Peter",
     userage_3: 60,
     useremail_3: "peter@email.com",
     userphone_3: "0807863900223"
};

console.log(users[2].username_3);

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = "Sunday";
console.log(day);

console.log(days instanceof Array); // --> true
console.log(day instanceof Array); // --> false

//length of an array
console.log(days.length) // ---> 7 which is the number of elements in the array
console.log(days[0].length) // --> 3 which is "Sun"

days[5] = "Alica";
console.log(days[5].length); // --> 5 which is "Alica"

//indexOf array
let colors = ["Red", "Blue", "Green", "White"];
console.log(colors.indexOf("Red")); // ---> 0
console.log(colors.indexOf("Blue")); // --> 1
console.log(colors.indexOf("Yellow")) // ---> -1 (Not Found)

let colors_2 = ["Red", "Blue", "Green", "White"]
console.log(colors_2.length); // ----> 4

colors_2.push("Yellow");
console.log(colors_2.length) // ----> 5
console.log(colors_2) // --> ['Red', 'Blue', 'Green', 'White', 'Yellow']. Yellow was added to the array but at the end taking the index of "White".


let colors_3 =  ["Red", "Blue", "Green", "White"]
console.log(colors_3.length); // ---> 4

colors_3.unshift("Black");
console.log(colors_3.length);
console.log(colors_3) // --> ['Black', 'Red', 'Blue', 'Green', 'White'] Black was added to the array but at the beginning taking the index of "Red". 

let name_1 = ["Sam", "Job", "Titus"];
console.log(name_1); // ---> ["Sam", "Job", "Titus"]
console.log(name_1.length) // ---> 3

name_remove = name_1.pop();
console.log(name_remove); // --> Titus 
console.log(name_1) // -->  Titus was removed from the array but at the end making the total index 2. 

let name_2 = ["Sam", "Job", "Titus"];
console.log(name_2); // --> ["Sam", "Job", "Titus"]
console.log(name_2.length); // --> 3

name_remove_1 = name_2.shift();
console.log(name_remove_1); // --> 2
console.log(name_2); // --> ["Job", "Titus"]
console.log(name_2.length); // --> Titus was removed from the array but at the beginning making the total index 2


//Revserse array
let name_3 = ["Sam", "Job", "Titus"];
console.log(name_3) // ---> ["Sam", "Job", "Titus"]

name_revs = name_3.reverse();
console.log(name_revs); // --> ['Titus', 'Job', 'Sam'] it reverses the array arrangement

let name_4 = ["Sam", "Job", "Titus", "Loki"];

let n1 = name_4.slice(2);
console.log(n1);

let n2 = name_4.slice(1, 3);
console.log(n2);

let n3 = name_4.slice(0, -1);
console.log(n3);

let n4 = name_4.slice(0, -2);
console.log(n4);

let n5 = name_4.slice(-1);
console.log(n5);


let name_5 = ["Sam", "Job", "Titus", "Loki"];
let name_6 = ["Mark", "Best", "Tosin", "James"];
let allnames = name_5.concat(name_6);


console.log(allnames); // ---> ["Sam", "Job", "Titus", "Loki"] + ["Mark", "Best", "Tosin", "James"] =  ['Sam', 'Job', 'Titus', 'Loki', 'Mark', 'Best', 'Tosin', 'James']