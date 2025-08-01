/*Literals*/
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

let we = BigInt(10000050000007000008) + 2; // --> wouldn't work (Error)
console.log(we);

let w_e = BigInt(100000005005007000008) + 2n;
console.log(w_e); // --> will work 
console.log(typeof w_e);

//String
let country = "Nigeria";
let continent = "Africa";
console.log(typeof country);
console.log(country);
console.log(typeof continent);
console.log(continent);

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


let str = String(); 
let num = Number(); 
let bool = Boolean(); 
console.log(str); // --> nothing
console.log(num); // --> 0
console.log(bool); // --> False

let bigint = BigInt();
console.log(bigint); // --> Uncaught TypeError TypeError: Cannot convert undefined to a BigInt unless to assign a value to it

let bigint_2 = BigInt(42);
console.log(bigint_2); // --> 42n


//type conversion 
const num_ = 44;

const s_t_r = String(num_);
const st_r_2 = String(true);
const num_2 = String(3);
const bool_ = Boolean(0);
const no = Number("123" - 22);
const sys = Symbol("1");

console.log(num_);
console.log(s_t_r);
console.log(st_r_2);
console.log(num_2);
console.log(no);
console.log(bool_);


//string conversion
let st_r = "Text";
let st_rStr = String(st_r);
console.log(`${typeof st_r} : ${st_r}`);
console.log(`${typeof st_rStr} : ${st_rStr}`)

let n_um = 200;
let n_umNum = String(200);
console.log(`${typeof n_um} : ${n_um}`);
console.log(`${typeof n_umNum} : ${n_umNum}`);

let bo_ol = true;
let bo_olBool = String(bo_ol);
console.log(`${typeof bo_ol} : ${bo_ol}`);
console.log(`${typeof bo_olBool} : ${bo_olBool}`);

let big_int = 122n;
let big_intBigint = String(big_int);
console.log(`${typeof big_int} : ${big_int}`);
console.log(`${typeof big_intBigint} : ${big_intBigint}`);

let nu_ll = null;
let nullNull = String(nu_ll);
console.log(`${typeof nu_ll} : ${nu_ll}`);
console.log(`${typeof nullNull} : ${nullNull}`);

let un = undefined;
let unUndefined = String(un);
console.log(`${typeof un} : ${un}`);
console.log(`${typeof unUndefined} : ${unUndefined}`);


//Number Conversion
let text_ = "red";
let text_Text = Number(text_);
console.log(typeof text_);
console.log(text_Text);

let hex = 0x1222;
let hexHex = Number(hex);
console.log(typeof hex);
console.log(hexHex);

let bin = 0b1010;
let binBin = Number(bin);
console.log(typeof bin);
console.log(binBin);

let oct = 0o1222;
let octOct = Number(oct);
console.log(typeof oct);
console.log(octOct);

let expo = 124e5237373;
let expoExpo = Number(expo)
console.log(typeof expo);
console.log(expoExpo);

let inf = Infinity;
let infInf = Number(inf);
console.log(typeof inf);
console.log(infInf);

let real = 22;
let realReal = Number(real);
console.log(typeof real);
console.log(realReal);

let bigint_ = 12n;
let bigint_Bigint_ = Number(bigint_);
console.log(typeof bigint_);
console.log(bigint_Bigint_);

let thisbool = true;
let thisboolBool = Number(thisbool);
console.log(typeof thisbool); // -> 42
console.log(thisboolBool);

let thisbool_ = false;
let thisboolBool_ = Number(thisbool_);
console.log(typeof thisbool_); // -> 42
console.log(thisboolBool_);

let n_u_ll = null;
let n_u_ll_Null = Number(n_u_ll);
console.log(typeof n_u_ll);
console.log(n_u_ll_Null);

let und = undefined;
let undUnd = Number(und);
console.log(typeof und);
console.log(undUnd);

//Bool Conversion
let bool_1 = 0;
let bool_1_Bool = Boolean(bool_1);
console.log(typeof bool_1);
console.log(bool_1_Bool);

let bool_2 = 1;
let bool_2_Bool = Boolean(bool_2);
console.log(typeof bool_2);
console.log(bool_2_Bool);

let bool_3 = "";
let bool_3_Bool = Boolean(bool_3);
console.log(typeof bool_3);
console.log(bool_3_Bool);

let bool_4 = "Text";
let bool_4_Bool = Boolean(bool_4);
console.log(typeof bool_4);
console.log(bool_4_Bool);

let bool_5 = null;
let bool_5_Bool = Boolean(bool_5);
console.log(typeof bool_5);
console.log(bool_5_Bool);

let bool_6 = undefined;
let bool_6_Bool = Boolean(bool_6);
console.log(typeof bool_6);
console.log(bool_6_Bool);

let bool_7 = NaN;
let bool_7_Bool = Boolean(bool_7);
console.log(typeof bool_7);
console.log(bool_7_Bool);

//BigInt
let BigInt_1 = 0
console.log(BigInt(BigInt_1)); // -> 0n

let BigInt_2 = 1
console.log(BigInt(BigInt_2)); // -> 1n

let BigInt_3 = 0b1000
console.log(BigInt(BigInt_3)); 

let BigInt_4 = 0x90900
console.log(BigInt(BigInt_4));

let BigInt_5 = 0o11;
console.log(BigInt(BigInt_5));

let BigInt_6 = null;
console.log(BigInt(BigInt_6)); // --> error

let BigInt_7 = undefined;
console.log(BigInt(BigInt_7)); // --> error

let BigInt_8 = true;
console.log(BigInt(BigInt_8)); //  --> 1n

let BigInt_9 = false;
console.log(BigInt(BigInt_9)); // --> 0n

let BigInt_10 = NaN;
console.log(BigInt(BigInt_10)); // --> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

let BigInt_11 = "0x11";
console.log(BigInt(BigInt_11)); // --> 17n


//Implicit Conversions
const str_1 = 4 - "1";
console.log(str_1);

const str_2 = 4 * "1";
console.log(str_2);

const str_3 = 4 / "1";
console.log(str_3);

const str_4 = 4 + "1";
console.log(str_4); // --> 41 ---- won't work


//Question 1: Write a code that will create variables 
// and initialize them with values of Boolean, Number, BigInt, String, 
// and undefined types using (when possible) literals and constructor functions.

let val_bool = true;
let val_str = "Red";
let val_num = 123;
let val_bigint = 12n;
let val_und;

console.log(val_bool);
console.log(val_str);
console.log(val_num);
console.log(val_bigint);
console.log(val_und);


//Question 2: Print all values and all types of those values using console.log. 
// Try to use string interpolation to display the value and type at the same time with a single console.log call, 
// e.g. in the following form: 1000 [number].
let strings = String("Excellence");
console.log(`${strings} : ${typeof strings}`);

let numbers = Number(1200);
console.log(`${numbers} : ${typeof numbers}`);

let bIGINT = BigInt(152n);
console.log(`${bIGINT} : ${typeof bIGINT}`);

let boolean = Boolean(true);
console.log(`${boolean} : ${typeof boolean}`);

let nulll = null;
console.log(`${nulll} : ${typeof nulll}`);

let bi1 = 100n;
let bi2 = Number(1n);

console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);

let unde = undefined;
console.log(`${unde} : ${typeof unde}`);
