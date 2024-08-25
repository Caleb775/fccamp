/* This is how you leave comments in javascript */

/* Below is how you make a variable and have a string "" attached to it*/
let read = "Read this Variable";
/* you can use '' or "" */
//let read = "Read this Variable"; or let read = 'Read this Variable';
// to log to the console you will use
console.log(read);
//When a variable is declared with the let keyword, you can reassign (or change the value of) that variable later
// when you do reasign a let variable there is no need to use let again
read = "Reread this Variable";
console.log(read);

//When you name a variable with many words you will use what is called
//camelCaseing. the second word has a capital letter
let secondRead = "dont read";
console.log(secondRead);
secondRead = "dont reread";
console.log(secondRead);

// variables with no asigned value are returned as undefined this is called an uninitialized variable
let thirdRead; //this will end up being undefined when logged
console.log(thirdRead);
// you can still asign a variable to an unitialized variable because of let
thirdRead = "now read";

// when asigning numbers to variables you do not need '' or "";
// this is how you can use numbers or an array
const character = "#";
const count = 8;
const rows = [];
console.log(count + 1); // this will log 9

// this is an empty array []
// this is an array with strings, all arrays start at 0 and not 1
let stri = ["Naomi","Quincy","CamperChan"];
// you can log this like normal and chose an array by
console.log(stri[1]);
// arrays can also be changed
stri[2] = 10;
console.log(stri) // the second array would have been CamperChan but was changed to
// the number 10

// when you want to grab the last array especially when you dont know how
// many there are, you can use the "array name" and .length -1
console.log(stri[stri.length - 3]);

// now do everything that you leared from the notes
let cities = ["London", "New York", "Mumbai"];
cities[1] = "Mexico City";
cities[2] = "Tokyo";
console.log(cities);
cities = ["Austin", "Mexico City", "Tokyo"];
cities[1] = "London";
cities[2] = "New York";
cities.push("Atlanta");
console.log(cities);

// .push() is how you can push a value to the end of an array
// must be before a console.log
// I will place the example on line 54

// .pop() is how you remove the last value in a array
// all will be removed, jane will remain even though it was
// pushed to the end, its not appart of the original array.
let nombre = ["john", "jeff", "joe"];
nombre.push("jane");
console.log(nombre);

let extra = nombre.pop("jeff");
console.log(extra);

// let variables can be changed
// const variables can not be changed

/* const rage = 11;
rage = 12; // this will throw an error 
*/

// basic for loops
/*  for (iterator; condition; iteration-statement) {
    logic;
  } */

// i is commonly used as the iterator
// you will use let do declare the i first
/*  for (let i = 0; condition; iteration-statement) {
    logic;
  } */

  // The condition of a for loop tells the loop how many times it should iterate. 
  // When the condition becomes false
  // a Boolean value can be either true or false
  // in this example, the Boolean is true. Our count is 8 and i is 0, so i is less than 8
  /*  for (let i = 0; i < count ; iteration-statement) {
    logic;
  } */

  // because of the let variable in the first iteration you can reasign i
  // in the iteration-statement section
  // now i has been reasigned to i = i + 1 and is no longer i = 0;
  /* for (let i = 0; i < count; -here- i = i + 1) {
    logic;
  } */

  // now for our logic we can just log it and see if our for loop
  // executes properly
  
  for (let i = 0; i < count; i = i + 1) {
    console.log(i);
  }
  

  // now lets push
  // we will use p instead of i so we can log it
  for (let p = 0; p < count; /* here */ p = p + 1) {
    rows.push(character.repeat(p + 1));
    
  }
    let result = "";
  console.log(result);

  // now we will do a for...of loop
  /* Example
  for (const value of iterable) {
    Logic;
} */
// you can use const because the variable only exists for a single iteration

// this will assign row to all items in the rows array
  /* for (const row of rows) {
  
}
  */

// next example we did something called concatenation
// concatenation is the action of linking things together in a series
 /* for (const row of rows) {
  result = result + row;
}
 */
// to make thing go vertical we need to use the special escape sequence \n

for (const row of rows) {
  result = result + "\n" + row;
}


console.log(result);

// const txt = ["Hello", "world", "welcome"];
// const text = "Hello world, welcome to the universe.";

// const res = txt.includes("Hello", 15);
// const result2 = text.includes("rld");

// console.log(res);
// console.log(result2);
// console.log(true == '');
// console.log('1' == 1);

// const str5 = "Hello";
// const str6 = "World 1234";

// function mergeTwoStrings(str5, str6) {
//   let rap = '';
//   let m = 0; // Initialize m outside the loop
//   let minLength = Math.min(str5.length, str6.length);
  
//   // Merge common parts of both strings
//   for (let j = 0; j < minLength; j++) {
//     rap += str5[j] + str6[j];
//   }
  
//   // Add remaining characters from str5 if any
//   while (m < str5.length) {
//     rap += str5[m];
//     m++;
//   }
  
//   // Add remaining characters from str6 if any
//   while (m < str6.length) {
//     rap += str6[m];
//     m++;
//   }

//   return rap;
// }

// console.log(mergeTwoStrings(str5, str6)); // "HWeolrllod 1234"


// how to mesrge arrays together
const str5 = "Hello";
const str6 = "World 1234";

function mergeTwoStrings(str5, str6) {
  let rap = '';
  let m = 0;
  
  // Merge common parts of both strings
  while (m < str5.length && m < str6.length) {
    rap += str5[m] + str6[m];
    m++;
  }
  
  // Add remaining characters from str5 if any
  while (m < str5.length) {
    rap += str5[m];
    m++;
  }
  
  // Add remaining characters from str6 if any
  while (m < str6.length) {
    rap += str6[m];
    m++;
  }

  return rap;
}

console.log(mergeTwoStrings(str5, str6)); // "HWeolrllod 1234"


// how to flatten an array
// this is interview level 
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2); // Depth of 2
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]


//example number two form youtube frontend interview with correct answer.
const arr = [0, [1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13, [14,15]]];

function flattenTheArray(val) {
  const rac = []
    for(let i = 0; i < val.length; i++){
      if(Array.isArray(val[i])){
         rac.push(...flattenTheArray(val[i]));
      }else{
        rac.push(val[i]);
      }
    }
    return rac;
}
const flaaat = flattenTheArray(arr);
console.log(flaaat);


//this and the above syntax are essentially the same
// const arr = [0, [1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13, [14,15]]];
// const flaaat = arr.flat(2);
// console.log(flaaat);

