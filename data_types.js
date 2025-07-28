//Literals
let  year  =  2025;
console.log(year);
console.log(2002);
console.log("Excellence");

//typeof
let name = "Excellence";
console.log(typeof name);
let number = 1;
console.log(typeof number);
let object = [1, 2, 4];
console.log(typeof object);
let variable;
console.log(typeof variable);

//Boolean//
let istooshort = true;
istoolong = false;
console.log(istooshort);

//Numbers
let Months = 365 / 52;
console.log(Months);

let weeks = 7 * 30;
console.log(weeks);

let half_month = 6 + 6;
console.log(half_month);

let Week = 7 - 2;
console.log(Week);

let a = 10; 
let b = 0x10; 
let c = 0o10;
let d = 0b100; 

console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
   
let x = 9e3;
let y = 123e-5;
console.log(x); 
console.log(y); 

let num_ber = 12 / 0;
let num_be_r = -Infinity
console.log(num_ber);
console.log(num_be_r);

//Big-Int
let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  
console.log(typeof  big);  
   
console.log(big2); 
console.log(7n  /  4n);  

let we = BigInt(100000000000000008) + 2; // --> wouldn't work (Error)
console.log(we);

let w_e = BigInt(1000000050000000008) + 2n;
console.log(w_e); // --> will work 

//String
let country = "Nigeria";
let continent = "Africa";
console.log(typeof country);
console.log(country);
console.log(typeof continent);
console.log(continent);
let w_e_1 = BigInt(1000000050000000008) + 2n;
console.log(typeof w_e_1); // --> will work 

let message_1 = "Let's March out 'On";
let message_2 = 'Lets got out for a "walk"';
console.log(message_1);
console.log(message_2);

let message_3 = "Let's \"March\" out 'On";
let message_4 = 'Lets got out for a \'walk\'';
console.log(message_3);
console.log(message_4);
   
let  path  =  "C:\\Windows";
console.log(path); 

let sonumb_1_0 = "C:\\" - "Windows";
console.log(sonumb_1_0);// --> NaN

let sonumb_1_0_1 = "C:\\\\" + "Windows";
console.log(sonumb_1_0_1);// --> C:\\Windows

let sonumb_1 = "100" - "10";
console.log(sonumb_1);
let sonumb_1_1 = "100" / "10";
console.log(sonumb_1_1);
let sonumb_1_2 = "100" * "10";
console.log(sonumb_1_2);

let sonumb_1_3 = "100" + "10";
console.log(sonumb_1_3); // --> 100100

//$
let continent_1 = "Africa";
let country_2 = "Nigeria";
let place = `${country_2} is a country in ${continent_1}.`
console.log(place);


//
console.time();
console.log("Test Console");
console.timeEnd();
console.time();
console.timeLog();


//
let river_1 = "Niger";
let char_1 = river_1.charAt(1);
console.log(char_1);
console.log(river_1);

console.time(river_1);
console.log("Test Console");
console.timeEnd(river_1);
console.time(river_1);
console.timeLog(river_1);

//Methods
let river_2 = "Java script Language";
let char_2 = river_2.charAt(2);
console.log(char_2);
console.log(river_2);

let river_3 = "Java script Language";
let char_3 = river_3.length
console.log(char_3);
console.log(river_3);

let r_iver = "Java script Language";
let ch_a__r = r_iver.slice(0, 19);
console.log(ch_a__r);
console.log(r_iver);

let river_4 = "Java script Language";
let char_4 = river_4.split("");
console.log(char_4);
console.log(river_4);


let char_5 = 'Java';
console.log(char_5.length);










let