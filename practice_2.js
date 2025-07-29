/*Object*/
let test_obj = {};
console.log(test_obj);

let userDetailsforuser_1 = {
     userFullName_1: "Ichigo kuroskai",
     usergender_1: "Male",
     userPhone_1: "+43-883-846-12",
     userEmail_1: "ichigo_shinigamikurosaki@yahoo.com",
     userAge_1: 34
};

let userDetailsforuser_2 = {
     userFullName_2: "Genriuysai Yamammoto",
     usergender_2: "Male",
     userPhone_2: "+230-891-820-1",
     userEmail_2: "sqaudone_yama@soulsociety.com",
     userAge_2: 1000
};


console.log(userDetailsforuser_1);
//Looking for user birthplace
console.log(userDetailsforuser_1.userbirthplace_1);
//adding user's birthplace
userDetailsforuser_1.userbirthplace_1 = "Japa";
console.log(userDetailsforuser_1.userbirthplace_1);
//Displaying the new profile of the new user with his birthplace
console.log(userDetailsforuser_1)



let Colorarray = ["Red", "Green", "Blue"];
console.log(Colorarray);
console.log(Colorarray.length);                         //  ---------------------> 3


let Namearray = [{
     userFullName_1: "Ichigo kuroskai",
     usergender_1: "Male",
     userPhone_1: "+43-883-846-12",
     userEmail_1: "ichigo_shinigamikurosaki@yahoo.com",
     userAge_1: 34
},
{
     userFullName_2: "Genriuysai Yamammoto",
     usergender_2: "Male",
     userPhone_2: "+230-891-820-1",
     userEmail_2: "sqaudone_yama@soulsociety.com",
     userAge_2: 1500
}];


//Creating a new user
Namearray[2] = {
       userFullName_3: "Unohana Retsu",
     usergender_3: "Female",
     userPhone_3: "+230-891-820-1",
     userEmail_3: "sqaudfour_kenpachi@soulsociety.com",
     userAge_3: 1000
}




//Adding elements to an empty array
let Array = [];
console.log(Array);

Array[0] = "Yellow";
Array[1] = "Blue";
console.log(Array);

let Arrays = [["rED", "bLUE", "YELLOW"], ["t", "HSHS", "SJSJS"]];

colorarray = Arrays[0];
console.log(colorarray[0]);
console.log(colorarray[1]);
console.log(colorarray[2]);
console.log(colorarray[3]);

rubish_array = Arrays[1];
console.log(rubish_array[3]);

rubish_array[3] = "Maks sesne"
console.log(rubish_array[3]);

console.log(rubish_array);

delete rubish_array[3];
console.log(rubish_array[3]);


let ar = [["Excel", "Mark", "Paul"], ["Rider", "Archer", "Doc"]];

console.log(ar);

ar[1].shift();
console.log(ar[1]);


let a = ["red", "Blue", 'green'];
console.log(a);

let b = ["wq", "ye", "ue"];
console.log(b);

let ab = b.concat(a);
console.log(ab);