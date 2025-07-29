/* String*/
let str_Red = String("Red");
console.log(str_Red); // --> Red

let str_One = String(1);
console.log(str_One); // --> 1

let str_bigInt = String(12n);
console.log(str_bigInt); // ---> 12

let str_bool_true = String(true);
console.log(str_bool_true); // --> true

let str_bool_false = String(false);
console.log(str_bool_false); // --> false

let str_null = String(null);
console.log(str_null); // --> Null

let str_un = String(undefined);
console.log(str_un); // --> Undefined

/*Numbers*/
let num_str = Number("Yellow"); 
console.log(num_str); // --> NaN

let num_str_ = Number(Yellow); 
console.log(num_str_); // --> Error

let num_num = Number(12);
console.log(num_num); // --> 12

let num_Bigint = Number(199892n);
console.log(num_Bigint); // --> 199892

let num_bool_true = Number(true);
console.log(num_bool_true); // --> 1

let num_bool_false = Number(false);
console.log(num_bool_false); // --> 0

let num_null = Number(null);
console.log(num_null); // --> 0

let num_undefined = Number(undefined);
console.log(num_undefined); // --> NaN


//Few Calculations
let cal_num = Number("1" + "1");
console.log(cal_num); // --> 11

let cal_num_1 = Number("1" + 1);
console.log(cal_num_1); // --> 11

let cal_num_2 = Number(1 + 1);
console.log(cal_num_2); // --> 2

let cal_num_3 = Number("1" - 1);
console.log(cal_num_3); // --> 0

let cal_num_4 = Number("1" / 1);
console.log(cal_num_4); // --> 1

let cal_num_5 = Number("1" * 1);
console.log(cal_num_5); // --> 1

let cal_bool_6 = Number(false + false);
console.log(cal_bool_6); // ---> 0

let cal_bool_7 = Number(true + true);
console.log(cal_bool_7); // ---> 2

let cal_bool_8 = Number(true + false + true);
console.log(cal_bool_8); // ---> 2

let cal_bool_9 = Number(true - true + true);
console.log(cal_bool_9); // ---> 1

let cal_bool_10 = Number(false + true);
console.log(cal_bool_10); // ---> 1

let cal_bool_11 = Number(true * true * true);
console.log(cal_bool_11); // ---> 3

let cal_bool_12 = Number(false * false);
console.log(cal_bool_12); // ---> 0

let cal_bool_13 = Number(false * true * true);
console.log(cal_bool_13); // ---> 0

let cal_bool_14 = Number(false / false);
console.log(cal_bool_14); // ---> NaN

let cal_bool_15 = Number(true / true);
console.log(cal_bool_15); // ---> 1

let cal_bool_16 = Number(false / true);
console.log(cal_bool_16); // ---> 0

let cal_bool_17 = Number(true / false);
console.log(cal_bool_17); // ---> Infinity

let cal_bool_18 = Number("false" + "false");
console.log(cal_bool_18); // ---> NaN

let cal_bool_19 = Number("true" + "true");
console.log(cal_bool_19); // ---> NaN

let cal_bool_20 = Number("false" - "false");
console.log(cal_bool_20); // ---> NaN

let cal_bool_21 = Number("true" - "true");
console.log(cal_bool_21); // ---> NaN


/*Boolens*/
let Bool_1 = Boolean(true);
console.log(Bool_1); // --> True

let Bool_2 = Boolean(false);
console.log(Bool_2); // ---> false

let Bool_str = Boolean("Yellow");
console.log(Bool_str); // --> true

let Bool_str_1 = Boolean("");
console.log(Bool_str_1); // --> false

let Bool_str_2 = Boolean();
console.log(Bool_str_2); // --> false

let Bool_str_3 = Boolean("Yellow" + "Yellow");
console.log(Bool_str_3); // --> true

let Bool_str_4 = Boolean("Yellow" - "Yellow");
console.log(Bool_str_4); // --> false: Yellow or non empty string is equal to true which is one. So Yellow minus Yeloow is also 1 - 1 which is zero or false.

let Bool_str_5 = Boolean("Yellow" / "Yellow");
console.log(Bool_str_5); // --> false

let Bool_num_1 = Boolean(1);
console.log(Bool_num_1); // --> true or even any number greater than 0 is true

let Bool_num_2 = Boolean(0);
console.log(Bool_num_2); // --> false

let Bool_num_3 = Boolean(1 - 1);
console.log(Bool_num_3); // --> false

let Bool_num_4 = Boolean(1 / 1);
console.log(Bool_num_4); // --> true

let Bool_bigint_1 = Boolean(0n);
console.log(Bool_bigint_1); // ---> false

let Bool_bigint_2 = Boolean(1n); // ---> or any Bigint larger than 1n 
console.log(Bool_bigint_2); // ----> true

let Bool_null = Boolean(null);
console.log(Bool_null); // --> false since null is 0, and false is also 0

let Bool_undefined = Boolean(undefined);
console.log(Bool_undefined); // --> false.

/*BigInt*/
let BigInt_str = BigInt("Yellow");
console.log(BigInt_str); // --> error

let BigIntintNum = BigInt(0);
console.log(BigIntintNum); // ---> 0n

let BigIntintNum_1 = BigInt(1);
console.log(BigIntintNum_1); // ---> 1n

let BigIntintBool_1 = BigInt(true);
console.log(BigIntintBool_1); // ---> 1n

let BigIntintBool_2 = BigInt(false);
console.log(BigIntintBool_2); // ---> 0n

let BigIntint_Null = BigInt(null);
console.log(BigIntint_Null); // --> Error

let BigIntint_undefined = BigInt(undefined);
console.log(BigIntint_undefined); // --> error
