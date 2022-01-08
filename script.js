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
console.log("Hi " +person["name"] + ",");
console.log("You are from: " + person.address.country);