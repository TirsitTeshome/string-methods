
// 1st Question
let word = "extravaganza";
let lastFour = word.slice(-4);
console.log(lastFour);

// 2nd Question
const food = "The quick fox jumped over the lazy dog";
let modified = food.slice(0, 4) + "eat" + food.slice(4);
console.log(modifiedFood);

// 3rd Question
const story = "The quick brown fox jumps over the lazy dog";
let theCount = story.toLowerCase().split("the").length - 1;
let brownCount = story.toLowerCase().split("brown").length - 1;
console.log(`"the" appears ${theCount} times`); 
console.log(`"brown" appears ${brownCount} times`); 

// 4th Question
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
console.log(string1.includes("are")); 
console.log(string2.includes("sitting")); 

//  5th Question
//1
let upperCaseWord = "wonderful".toUpperCase();
console.log(upperCaseWord); 

//2
let lowerCaseWord1 = "amazing".toLowerCase();
console.log(lowerCaseWord1); 
let lowerCaseWord2 = "UndERneath".toLowerCase();
console.log(lowerCaseWord2); 

//3
let titleCaseWord = "A wonderful world"
   console.log(titleCaseWord); 
