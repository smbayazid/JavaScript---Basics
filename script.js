console.log("Hello World!")


// Variables ###################################################

let firstName = "Sufi"
let lastName = "Bayazid"

let message = `Hi, ${firstName} ${lastName}!`

console.log(message)


// Constant ####################################################

let deposit = 1000;
let interestRate = 0.125;
let noOfYears = 5;

let totalMoney = deposit + (deposit * interestRate * noOfYears)

message = `Your money after ${noOfYears} years: ${totalMoney}`

console.log(message)


// Data Types ##################################################
// 1. Premitives / Valur Types
//    i.   String
//    ii.  Number
//    iii. Boolean
//    iv.  undefined
//    v.   null

// 1. Reference Types
//    i.   Objects
//    ii.  Array
//    iii. Functions


// Objects #####################################################

let person = {
    name: `${firstName} ${lastName}`,
    age: 26,
    email: "smbayazidd@gmail.com",
    address : {
        addressLine1: {
            houseNo: 406,
            roadNo: 9,
            block: "F",
            area: "Bashundhara R/A"
        },
        city: "Dhaka",
        zipCode: "1229",
        country: "Bangladesh"
    }
};

console.log(person);
console.log("Hi " +person["name"] + ","); // Bracket Notation
console.log("You are from: " + person.address.country); // Dot notation


// if else #####################################################

if(person.age > 18){
    console.log("You are adult!");
}
else{
    console.log("You are not an adult yet!");
}


// For Loop ####################################################

let nameOfAttributes = '';
for (key in person){
    nameOfAttributes += key + ' ';
}

console.log(`Person Object has ${nameOfAttributes}attributes.`);

for (let i=0; i<5; i++){
    console.log(i+1);
}


// While Loop ####################################################

let x = 5;
while(x > 0){
    if(x % 2 == 0) console.log('Even Number');
    else console.log('Odd Number');
    x--;
}

// Array #######################################################

let cities = ['Dhaka', 'B-Baria', 'Sylhet', 'Chittagong', 'Rajshahi', 'Rangpur', 'Jeshore', 'Khulna', 'Chandpur'];

cities.sort();

cities.forEach(element => {
    console.log(element)
});


// Set #########################################################

const letters = new Set();

letters.add('z');
letters.add('a');
letters.add('b');
letters.add('c');
letters.delete('z');
letters.add('d');
letters.add('e');

let text = '';
for (const x of letters.values()) {
    text += x + ' ';
}

console.log(text);

// Map #########################################################
// Create a Map
const fruits = new Map([
    ["apples", 400],
    ["bananas", 200],
    ["oranges", 350]
  ]);

  // Update 
  fruits.set("orange", 300);

  // Get
  fruits.get("apple");

  // Delete
  fruits.delete("apples");