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
// this is how you can use numbers
let count = 8;
console.log(count + 1); // this will log 9

// this is an empty array []
// this is an array with strings, all arrays start at 0 and not 1
let rows = ["Naomi","Quincy","CamperChan"];
// you can log this like normal and chose an array by
console.log(rows[1]);
// arrays can also be changed
rows[2] = 10;
console.log(rows) // the second array would have been CamperChan but was changed to
// the number 10

// when you want to grab the last array especially when you dont know how
// many there are, you can use the "array name" and .length -1
rows[rows.length - 1];


