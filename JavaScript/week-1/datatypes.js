// BOILERPLATE
function wait(seconds)
        {
        let start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) 
                {
                if ((new Date().getTime() - start) > (seconds*1000))
                        {
                        break;
                        }
                }
        }
/// END BOILERPLATAE


/*
There are 7 basic types in JavaScript.

	number for numbers of any kind: integer or floating-point.
	string for strings. A string may have one or more characters, there’s no separate single-character type.
	boolean for true/false.
	null for unknown values – a standalone type that has a single value null.
	undefined for unassigned values – a standalone type that has a single value undefined.
	object for more complex data structures.
	symbol for unique identifiers.
*/ //SEE: https://javascript.info/types

// All other types are made up from combining or building on these fundamental building blocks, this means
// no matter how complicated a program is, it can boil down to 'simple parts'. you might not understand what
// the simple parts are doing in the 'whole grand scheme of things' but at least you can break apart each
// component and begin to understand it.

typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof object // "object"  (1)

typeof null // "object"  (2) // null is a type of object, everything comes from objects in javascript

/*
Empty values
There are two special values, written 
	null and undefined, 

that are used to denote the absence of a meaningful value. 
They are themselves values, but they carry no information.

Many operations in the language that don’t produce a meaningful 
value (you’ll see some later) yield undefined simply because they 
have to yield some value. Being able to check if something is undefined
is very useful to us in many ways as you will see later on. 

The difference in meaning between undefined and null is an accident of 
JavaScript’s design, and it doesn’t matter most of the time. 

In cases where you actually have to concern yourself with these values, 
I recommend treating them as mostly interchangeable.

However, I like 'correctness' and dont like how 'javascript' likes
to hide some things from you, so many a times we often get confused on 
whats the difference between UNDEFINED and NULL.

	undefined means a variable has been declared 
		but has not yet been assigned a value. 

On the other hand, 
	null is an assignment value. 
	It can be assigned to a variable as a representation of no value.

Also, undefined and null are two distinct types: ie: they are different, even if they
usually amount to the same thing, but sometimes this matters. 

undefined is a type itself (undefined) while null is an object.

Unassigned variables are initialized by JavaScript with a default value of undefined. 
JavaScript never sets a value to null. That must be done programmatically, so if you
see a 'null' in your debug output when you didn't expect one, you probably made a
mistake in an assignment value somewhere, unless you purposly assign it to mean no
value. 

Once a variable is 'assigned' - it cannot become 'unassigned' again (except when it
goes out of scope, and is destroyed or inaccessable) - it can become 'null' though. 

*/

// I will demonstrate

let someValue;
console.log("Typeof someValue is:\t\t " + typeof(someValue));
console.log("Value of someValue is:\t\t " + someValue);
// as we can see, it is undefined because we never gave it a value yet
// also, because it hasn't being given a value, we can't determine the
// value, so we also get undefined for that too. 

if (someValue === null) console.log("\t\t\t\talso null");
// we check to see if it is also a null, its not. 
// the === means, we 'must' be what we want. 

// this time, we will use two == instead, this allows 'less precision' in our
// 'check'. what it actually does is force javascript to compare it to all its
// types, and the closest match it can find, is null, which is an object, 
// so here, we get a null back and we never changed the value
if (someValue == null) console.log("we can check for null");

// now we assign a value
someValue = 1;

console.log("TypeOf someValue is\t\t" + typeof(someValue)); // number
console.log("Value of someValue is\t\t" + someValue); // 1

// now we make it null again
someValue = null;

console.log("TypeOf someValue is\t\t" + typeof(someValue));  // object type!, not undefined
console.log("Value of someValue is\t\t" + someValue); // expected null value

// we can no longer unasssign someValue, it will always have a value now of at least null
// and be at minimum of type object. 


// everything inside of JavaScript is derived from type Object. Functions, Operators, DataTypes,
// all of it, but, what are these objects?

// before we can fully understand these, first we must expore our basic datatypes, since, these
// are things we can already 'relate to and work with' without to much deeper understanding
// of javascript, then, we will use those to explore objects in more detail later. 


// Set a boolean value
let aBooleanValue = true;
let anotherBool = false;
// a boolean value should be 'true' or 'false' and 'nothing else'. 
// it is used to represent simple basic logic, for example. 

let aCounter = 0; // we make a simple counter
let loopUntil = 100; // we will loop until aCounter reaches this value
while (aCounter != loopUntil) // while the two values aCount and loopUntil are NOT the same, we continue the loop
	{
	// while in the loop, we simply add 1 to aCounter every time the loop restarts
	aCounter++;
	console.log("Loop: " + aCounter);
	// when aCounter is the same as loopUntil (both equal 100) then the loop will end. 
	}

// How does this work? 
// where is the boolean here? - I made two numbers, I used this while thing? but there is no mention of a boolean?

// lets examine, lets first give the two values different numbers, the numbers don't matter
aCount = Math.floor((Math.random() * 10) + 1); // random number between 1 and ten
loopUntil = Math.floor((Math.random() * 100) + 10); // random number from 10 to 100

// now we tell console.log to run the same bit of code we used in the 'while' loop just so
// we can examine the output in our terminal
console.log(aCounter != loopUntil) // outputs TRUE if aCount and loopUntil DONT have the same value
console.log(aCounter === loopUntil) // oututs TRUE if aCount and loopUntil have the same value

// lets give them specific values
aCount = 10
loopUntil = 10
console.log(aCount != loopUntil) // returns FALSE
// both values are the same, so false is returned

loopUntil = 10;
aCount = 1;
console.log(aCount != loopUntil) // returns TRUE
// both values are not the same, so true is returned

// so we could do
let areTheyDifferent = (aCount != loopUntil) // variable has TRUE because they have different values
let areTheyTheSame = (aCount === loopUntil) // variable has FALSE because they are NOT the same
console.log(areTheyDifferent);
console.log(areTheyTheSame);

aCount = loopUntil
areTheyDifferent = (aCount != loopUntil);
areTheyTheSame = (aCount === loopUntil);

// the behaviour you should see here are those of yes or no logic, otherwise known as 'Bitwise Operations'
// During the loop, the 'while' keyword tells JavaScript, keep running the following code 'while 'this statement is true'
// and the code we tell while statement to use  to run 'while the statement is true' is to increment aCount++ over and over.
//
// {
//	aCounter++
// } 
// Each time it does that, it will ask again, is aCount and loopUntil different, since, the behaviour we want
// to achieve here is that the loop counts from 0 to 10, then, we set initially aCount to 0, then we set loopUntil
// to 10, and we know logically, if we increment aCount++ over and over, eventually, aCounter will have a value
// that is equal to loopUntil, causing the question 'while the statement is 'true', to return false, because
// while aCounter = 0 and loopUntil is 10, then are they different, yes they are, continue loop
// while aCounter = 1 and loopUNtil is 10, then are they different, yes they are, continue loop
// while aCounter = 2 and loopUntil is 10, then are they different, yes they are, continue loop
// etc.
// etc
// while aCounter = 10 and loopUntil is 10, then, are they different, NO! They are the same, break loop!
// so

aCounter = 0; // we make a simple counter
loopUntil = 100; // we will loop until aCounter reaches this value
while (aCounter != loopUntil) // while the two values aCount and loopUntil are NOT the same, we continue the loop
        {
        // while in the loop, we simply add 1 to aCounter every time the loop restarts, we know if we do this
	// then eventually, aCounter will become equal to loopUntil, if we dont, and aCounter doesn't change, 
	// the loop will continue forever. We wouldn't want that :/ 
        aCounter++;
        // when aCounter is the same as loopUntil (both equal 100) then the loop will end. 
        }


// we could also, change our logic and make it do the same thing. Loop some number of times. 
//  before, we used a NOT comparison, to determine if two 'datatypes' were NOT the same and used that logic 
// to make a counter. in this case, the same value, true, or false. will be used with <= operator to determine
// if a value is less than or equal to another value 

aCounter = 0;
loopUntil = 100;
while (aCounter <= loopUntil)
	{
	aCounter++
	}

// this example, is working with a single datatype, called boolean, and using our knowledge of 'number operations'
// we use every day to build simple 'step by step logic'

// here we will combine our knowledge of string, number and boolean to achieve a simple 'repeat message operation'
// we will use a string, represented in aMessage
// we will use an number, represented in numberOfTimes
// we will use a boolean in the 'while' statement by asking the question, is aCount < nimberOfTimes (notice we left 
// out the = to part this time)
function repeatMessage(aMessage, numberOfTimes)
	{
	let aCount = 0; // set an initial value, so we are not undefined
	while (aCount < numberOfTimes) // ask our boolean question and pass the result, true or false, to while
		{
		aCount = aCount + 1  // i did this instead of aCount++ because it is the same thing, aCount++ just adds 1
		console.log(aMessage);
		}
	}

// now I CALL the function
// NOTE: The function code above, althrough 'written' is not executed until 'called' somewhere, so we will 'call it now'
repeatMessage("hello", 10);
repeatMessage("world", 10);


// it could also be written as, like below here, using a technique called 'recursion', notice the use of 1 less variable
// required, let aCount = 0 is missing, instead, here, I decide to check again if aCount is not equal to zero, and I
// just make sure that before I 'call' my repeatMessageAlt function again, I give it a new count value that is less than
// the one it received in the previous call, this way, it will eventually count down to zero, in every additional call
// to the repeatMessageAlt because we are giving it one less value each time, and when it reaches zero,
// it finally ends, by 'unravelling back up all th elayers'. and since each 'layer' only calls the 'if count is different 
// than 0' code once, it won't run forever
// UNLESS count were for some reason to never reach zero! - but the logic here is clear, it will. 

function repeatMessageAlt(aMessage, count)
	{
	if (count === 0) return false
	else 
		{
		console.log(aMessage);
		repeatMessageAlt(aMessage,(count-1));
		}
	return true;
	}

// we can prove that by calling it again here
repeatMessageAlt("repeat me 3 times",3);
repeatMessage("repeat me 3 times",3);
// both functions are the same. 


// yet another example, this one wouldn't be used in the real world
// but it is functional, and would behave almost as well, the important
// thing to note is the logic and 'use of datatypes' to construct
// small bit of logic
function repeatMessageExcersizeExample(aMessage,numberOfTimes)
	{
	let ifFinished = 'IS FINISHED'
	let ifNotFinished = 'IS NOT FINISHED'
	let currentCondition = ifNotFinished

	let finishLoopCondition = ifFinished;
	let aCounterToKeepTrackOf = 0;
	while (finishLoopCondition != currentCondition)
		{
		console.log(aMessage);
		aCounterToKeepTrackOf = aCounterToKeepTrackOf + 1;
		if (aCounterToKeepTrackOf === numberOfTimes)
			{
			currentCondition = ifFinished;
			}
		else
			{
			currentCondition = ifNotFinished;
			}
		}
	}
repeatMessageExcersizeExample("repeat me 3 times",3);

// NOTE: There are many ways to combine things, many points of view
// many technicques that are 'correct' - some code can be better
// 'optimized' while other code may be suited to different circumstances
// or just not implemented as well. so when you see example
// code, undestand, it is not the only way, the thing you should
// look for is to understand 'what is going on with the data types'
// THE MOST important thing to get correct at the beginning is 
// how you think of logic. 

// Computers operate on data, they shift bits around. We as programmers
// also operate on datatypes of various kinds. 


// EXCERSIZE 11
// Write a function that implements the 'counting' in a game of
// 'hide and seek'. 
// fill out your code, use only string, number, boolean, if or while
// and any of the bitwise operations 
// (see: https://www.w3schools.com/js/js_operators.asp) or elequent JS
// chap 1. 
//
// REQUIREMENTS: 
// Show messageBeforeCount before your function begins counting
// Show messageAfterCount after your function is finisied counting
// Show countMessage plus the 'current count' while you are counting down
// Bonus Points: find a use for countDownFrom in combination with one of 
// the string message types. 
function EX_11(messageBeforeCount, messageAfterCount, countMessage, countDownFrom)
	{
	// INSERT YOUR CODE HERE
	} 


// EXCERSIZE 12
// In the above examples, we used a boolean, a number, a string. 

// Write a function that checks if two strings are the same and outputs true or false
function EX_12(stringA, stringB)
	{
	// INSERT YOUR CODE HERE
	}

// EXCERSIZE 13
// Write a function that checks if a number is similiar to its string counterpart
function EX_13(aStringNumber, aNumber)
	{
	// INSERT YOUR CODE HERE
	}

// EXCERSIZE 14
// Write a function that will count backwards from 100 and display that count


// INSERT CODE HERE

// EXCERSIZE 15
// Write a function that will count forwards from 0 t 100 and display that count

// INSERT CODE HERE

// EXCERSIZE 16
// Write a function that will use both functions from EXCERSIZE 14 and 15
// to count both forwards and backwards, name the function EXCER_16 and
// insert below

// INSERT CODE HERE


// EXCERSIZE 17
// Write a function that will check if a number is 'prime or not'
// Return true or false. Don't worry about effeciency. 
function IsPrime(aNumber, messageIfNotPrime, MessageIfPrime)
	{
	// insert your code here
	// if aNumber is a prime, console.log messageIfPrime and return true;
	// if aNumber is NOT a prime, console.log messageIfNOtPrime and return false;
	}

// EXCERSIZE 18
// Write a function that will check what numbers are prime, and what are
// not in some 'range'. Use your function from Exersize 17 
// HINT. Use while - and maybe an if/else statement
function findPrimes(startFrom, endAt)
	{
	// INSERT YOUR CODE HERE
	}


// EXCERSIZE 19
// AMMEND the repeatMessage function on line 223, and using typeof(object) and console.log, illustrate what happens when.
//
//
// You pass expected correct paramaters
// You mix up paramaters, for example

//repeatMessage(123323232,"not a number");
//repeatMessage("string","string");
//repeatMessage(1,10);
//repeatMessage(10,10);
//repeatMessage(undefined,null);
//repeatMessage(null,undefined);

// EXCERSIZE 20
// In WHAT cases, do the functions NOT Behave as expected?

