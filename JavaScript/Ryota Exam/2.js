function palindrome(str){
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
//let res = palindrome('Madam');
//let res = palindrome('Madamaa');
let res = palindrome('aMadama');
console.log(res);