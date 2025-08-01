/*Unary increment and decrement operators*/
let a = 10;
console.log(a);
console.log(a++);
console.log(a);

let b = 11;
console.log(b);
console.log(++b);
console.log(b);

let c = 12;
console.log(c);
console.log(c--);
console.log(c);

let d = 13;
console.log(d);
console.log(d--);
console.log(d);

/* Unary arithmetic operators*/
let str = "35";
console.log(`${str}: ${typeof str}`);
let n1 = +str;
console.log(`${n1}: ${typeof n1}`);
let n2 = -str;
console.log(`${n2}: ${typeof n2}`); 
let n3 = -n2;
console.log(`${n3}: ${typeof n3}`);
let n4 = -"str";
console.log(`${n4} : ${n4}`);


/*Compound Assignment Operators*/
let x = 100;
x += 2;
console.log(x);

x-=20;
console.log(x);

x*=100;
console.log(x);

x/=2;
console.log(x);

x%= 263;
console.log(x);

x**= 2;
console.log(x);

/*Logical operators*/
//AND &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//OR ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//NOT !
console.log(!true);
console.log(!false);

const a_1 = true;
const b_1 = true;
const c_1 = false;
const d_1 = true;

console.log(a_1 && b_1 && c_1 || d_1); // ----> true
console.log(a_1 && b_1 && (c_1 || d_1)); // ----> true

/*Logical operators and non-Boolean values*/
console.log(true || "Red"); // ---> true
console.log(10 && 25); // ---> 25
console.log(true && "Red"); // ---> Red
console.log("Red" && 1234); // ---> 1234
console.log(false || 1234); // ---> 1234
console.log("Red" && true); // ---> true
console.log("" && "Red"); // ---> ""
console.log(12334 && false); // ---> false

console.log(true || 1234); // ---> true
console.log("Red" || 1234); // ---> Red
console.log(true && 1234); // ---> 1234
console.log(0 || 53); // ---> 53
console.log(10 || 25); // ---> 10
console.log(false && 1234); // ---> false
console.log(1234 || false); // --> 1234
console.log(0 && 53); // ---> 0
console.log("Red" || true); // ---> Red
console.log("" || "Red"); // ---> Red
