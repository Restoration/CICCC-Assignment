# Assignments



Q1) - what are the javascript datatypes?

- Object
- Number
- function
- undefined
- String
- Null
- boolean

Q2) - what are the 3 ways of creating a function?

```JavaScript
var func = function(value){
    return value;
}
function func(value){
    return value;
}
const func = (value) =>{
    return value;
}
```

Q3) - create globally scoped variable

```JavaScript
var global = "Global variable";
function func(){
    console.log(global);
}
func();
```

Q4) - Create a locally scoped variable

```JavaScript
let global = "global";
function func(){
	let local = "local";
}
console.log(global);
console.log(local);
```

Q5) - create two functions using var function() notation

```JavaScript
var G = {};
G.foo = function(){
    console.log("foo");
}
G.hoge = function(){
    console.log("hoge");
}
```

Q6) - switch those two functions so they each do the opposite

```JavaScript
var obj = {
	func1:"",
	func2:"",
	tmp:"",
};
obj.func1 = function(){
	console.log(1);
}
obj.func2 = function(){
	console.log(2);
}
obj.tmp;
obj.tmp = obj.func1;
obj.func1 = obj.func2;
obj.func2 = obj.tmp;

console.log(obj.func1);
console.log(obj.func2);
```

Q7) - create a function that counts 1000 using recurison backward

```JavaScript
function loop(i){
    i--;
    console.log(i);
    if(i == 0) return false;
    loop(i);
    return i;
}
loop(1001);
```



Q8) - Creata a function that counts to 1000 using recurision forware

```JavaScript
function loop(i){
    i++;
    console.log(i);
    if(i == 1000) return false;
    loop(i);
    return i;
}
loop(0);
```

Q9) - create a function that checks if a number is prime or not

```JavaScript
function checkPrime(n){
	if (n===1){
		return false;
	}else if(n === 2){
		return true;
	}else{
	for(var x = 2; x < n; x++){
		if(n % x === 0){
			return false;
		}
	}
		return true;  
	}
}
console.log(checkPrime(27));
```



Q10) - create a function that will calcuate prime numbers of to N

```JavaScript
function primeCalculate(max){
    var store  = [];
    var primes = [];
    for (var i = 2; i <= max; ++i) {
        if(!store [i]){
            primes.push(i);
            for (var j = i << 1; j <= max; j += i) {
                store[j] = true;
            }
        }
    }
    return primes;
}
console.log(primeCalculate(5));
```

