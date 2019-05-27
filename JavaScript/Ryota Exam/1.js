function reverseString(str) {
    let result ="";
    for(var i = str.length-1; i >= 0; i--){
        result += str[i];
    }
    return result;
}
let res = reverseString('32243');
console.log(res);