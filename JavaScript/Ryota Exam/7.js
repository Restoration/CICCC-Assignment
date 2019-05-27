function checkVowels(str){
	return str.match(/[aeiou]/gi).length;
}

//let res = checkVowels("The quick brown fox");
let res = checkVowels("Web Development Tutorial");
console.log(res);

