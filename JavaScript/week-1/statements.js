/*
In JavaScript a single line of code is called a STATEMENT. 
*/
// examples of simple statements, here we use 'console.log' to output a message,
// we often use console.log to help with debugging or throwing errors. 

console.log("Hello World");
console.log('Hello World');
// NOTE: How we used ' or " character? - we can use both in pairs when working
//       with string like data

// Here we use the same message but also call a function on the object string to convert it from upper or lower case
console.log("Hello World".toUpperCase());
console.log('Hello World'.toLowerCase());
// NOTE: Note how it doesn't matter how we write above, it appears in the expected case (upper or lower)
// NOTE: Note the use of () at the end of toUpper and toLowerCase. This is called 'parentheses'
// 'parentheses' indicate to javascript that we are working with a function and they are also used to 
// determine paramaters, and order of evulation (we go into later). 

// here we do the same thing, except, we take the original value, convert it to upper, then convert it to lower
console.log(("Hello World".toUpperCase().toLowerCase()))
// NOTE: We can do this because "Hello World" is a string object and objects of type string in javascript
// have helper functions, like, toUpperCase() to help us do stuff quick.

// Sending messages alone is not much fun so we can write other kinds of 'statements'
// here, we use the 'let' 'keyword' which says, 'let ThisThing equal SomeThingElse'
let aMessage = "This is a simple variable declaration, I am setting a string value\n"
let anotherMessage = 'Here we go again, isn\'t this fun'

// we can also chain together, or 'concatonate' strings
let longMessage = aMessage + anotherMessage
console.log(longMessage);

// NOTE: Again, note how I use ' or " when creating the string, notice also this time in anotherMessage
// the use of a special \ character, right before the '. What does this do? and again I use \n in aMessage?
// In strings, we can use special characters that do stuff, like, add tabs and indentation
let tabbedMessage = "Hello\tWorld"

// we also need to be able to work with numbers, so we can do things like
let aSmallNumber = 0;
let aLargeNumber = 10;

// then maybe combine these two things, so we can count from 0 up to 10
for (aSmallNumber = 0; aSmallNumber <= aLargeNumber; aSmallNumber++)
	{
	console.log("Count: \t" + aSmallNumber + " of " + aLargeNumber);
	}

// NOTE: The above is a for loop, and for readability it appears on many 'lines' so we can read it, but we
// could also write it as

for (aSmallNumber=0;aSmallNumber<=aLargeNumber;aSmallNumber++) console.log("Count Again: " + aSmallNumber);
// that can sometimes be harder to read

// NOTE: We set a Counter Variable, something we can count with
let counter;
// it doesn't initially have a value so we give it one
counter = 0;
// or we could give it a string value, javascript will allow this and convert it as necessary to a number
counter = "0"

// either would work, string, or number, we 'should' use numbers though, unless we have a clear reason 
// to do otherwise
for (counter = 0; counter<10;counter++)
	{
	console.log("counter: " + counter);
	}

// to illustrate this, I am going to make some variables

let varA = 10;              // a number
let varB_AsNumber = 10      // another number
let varB_AsString = "10"    // the same number as a string
let aResult; // we will add numbers and show the result here

// first, lets show what aResult looks like
console.log(aResult);
// NOTE: Notice how it was 'underfined'

// now lets add varA + varB_AsNumber, the result should be 20
aResult = varA + varB_AsNumber;
console.log(aResult);
// NOTE: What is the value?


// and the data type of aResult should be type of 'Number' so lets 
// check if that is true
console.log(typeof(aResult));


// now lets do it but mix it with a string
aResult = varA + varB_AsString;
console.log(aResult);
// NOTE: What is the value?

// now, lets also check the data type too
console.log(typeof(aResult));
// NOTE: What is the data type? 

// we could have done this
aResult = varA + parseInt(varB_AsString)
// now aResult is a number again
console.log(typeof(aResult));
// we could even combine it like this
console.log(parseInt(aResult));
// what would happen if counter = "a" or "hello"?
// The moral is, it can all all get messy, sometimes confusing, we should always
// 'know' what kind of 'type' we are working with and what we
// 'expect' to work with, it makes thing easier later

aResult = "10" // we make sure aResult is 10 represented as a 'string' data type, just for fun
if (typeof(aResult) === 'string')
	{
	console.log("We know aResult is of type String");
	}
else
	{
	console.log("This happens if aResult  is NOT a string");
	}

aResult = 10 // we make sure aResult is 10 represetned as a 'number' data type, just for fun
if (typeof(aResult) === 'number') console.log("We know aResult is of type number");

// STATEMENTS can be simple, like
let a = 1;
let b = 2;
let result = a + b;

// or they can be complex

for (let i = parseInt("0"); i< parseInt("100".toLowerCase()); i++)
	{
        result = (a + b - (a+i) / b*(i+i) - Math.PI) * -1;
	console.log(result)
	}

// they can be written many ways

for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) console.log(j*1);

// but when you get familiar with them, the 'patterns' become clear. 
	
// you have probably noticed how difficult it is, without pausing, and slowing things down, to
// see the actual output of the above code when you run it

// lets fix that and slow things down by writing a FUNCTION

// JavaScript has no wait to 'pause' output for some number of seconds, so we
// need to create a way

// here I make a function called wait, and I let it take one paramater
function wait(seconds) 
	{
	// inside it, i create a new variable of type Date and use Date()'s getTime()
	// function to get the current time
  	let start = new Date().getTime();
	// then I begin a loop, that just loops and loops doing nothing until some
	// time has passed, this emulates a 'wait' - the program won't continue until
	// the loop stops, and the loop wont stop until 'seconds' have run out. 
  	for (let i = 0; i < 1e7; i++) 
		{ // what is ie7?  // its just a large number in 'scientific notation'
    		if ((new Date().getTime() - start) > (seconds*1000))
			{
			// i 'break' out of the for loop, eventually
      			break;
    			}
  		}
	}
// now we can all 'wait', lets wait 10 seconds
wait(10)

// EXCERSIZE 1
// add the wait(someNumberOfSeconds) to various portions of code above to 'slow it down' so you can see
// more of the output, as you do, try output additional variables or inserting your own code so you can
// get a feel for it, if you make a mistake and your code won't 'run' anymore, try backtracking	
// or carefully reading the 'debug' output


// EXCERSIZE 2
// create a string value using single quation

/* WRITE CODE HERE */



// EXCERSIZE 3
// create a string value using a double quation

/* WRITE CODE HERE */




// EXCERSIZE 4
// create a string value that says the following
//    in javascript we can use " or ' when making strings but they must always appear in matching pairs like "" or ''

/* WRITE CODE HERE */





// EXCERSIZE 5
// create a number

/* WRITE CODE HERE */


// EXCERSIZE 6
// create two numbers, add them together and display result to screen

/* WRITE CODE HERE */

// EXCERSIZE 7
// create two numbers and a number as a string, add them together and display result to screen

/* WRITE CODE HERE */


// EXCERSIZE 8
// What happens when you add "23" to Math.PI and when you add 23 to Math.PI


/* WRITE CODE HERE */



// EXCERSIZE 9
// Demonstrate what 'can' happen, when we are using strings and numbers together, show a case
// where the failure can occour in the following functions


// 9.a - use the add function to add 2 numbers together, show a case where it works, and where it fails
function add(firstNum, secondNum)
	{
	return firstNum + secondNum;
	}

// 9.b - use the substract function to subtract 1 number from another, show a case where it works and where it fails
function subtract(firstNum, secondNum)
	{
	return firstNum - secondNum;
	}

// 9.c - use the multiply function to multiply 1 number by another number, note how multiply does it...
function multiply(aNum, by)
	{
	let aResult;
	for (let times = 0; times < by; times++)
		{
		aResult = aResult + add(aNum,aNum);
		}
	return aResult;
	}

// 9.d - use the divide function to divide 1 number by another
function divide(aNum, by)
	{
	let reverseSign = aNum * -1
	return multiple(aNum, reverseSign);
	}

/* WRITE CODE HERE */


/* WRITE CODE HERE */


/* WRITE CODE HERE */



// 9.E - add the console.log and typeof function to each of the above functions to give
// clearer results as to what is going on. 


// EXCERSIZE 10 - simple guessing game
// write a series of statements that will do the following
// (ie: implement the following function, include the below variable, randomNumber as is)
const randomNumber = Math.floor((Math.random() * 10) + 1);
/*
PSUEDO CODE

	print PICK A NUMBER BETWEEN ONE AND TEN
	wait 3 to 5 seconds
	print NOW MULTIPLY IT IN YOUR HEAD BY 2
	wait for 3 to 5 seconds
	print NOW ADD randomNumber to that value
	wait for 3 to 5 seconds
	print NOW DIVIDE IT IN YOUR HEAD BY 2
	wait for 3 to 5 seconds
	print now, the number you chose in the beginning, subtract from your current result
	wait for 3 to 5 seconds
	print your number is (randomNumber / 2)
	



*/

/* INSERT YOU CODE HERE */


