function bindStr(str){
    let current = 0;
    let result = [];
    while (current < str.length) {
        let newStr = str.charAt(current);
        //console.log(newStr);
        let tmp = [newStr];
        for (let i in result) {
            tmp.push("" + result[i] + newStr);
        }
        result = result.concat(tmp);
        //console.log(result);
        current++;
    }
    return result;
}

//let res = bindStr("abc");
//let res = bindStr("abcdkkkkk");
let res = bindStr("al");
console.log(res);
