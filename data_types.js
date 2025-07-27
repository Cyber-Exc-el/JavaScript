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
