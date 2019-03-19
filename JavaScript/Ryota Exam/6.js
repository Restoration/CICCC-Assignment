function checkMaxLen(str){
	let ary = str.split(' ');
    let num = [];
	ary.filter((i)=>{
    	num.push(i.length);
	});
    let max = Math.max(...num);
	let res = ary.filter((i)=>{
	if(i.length == max){
		return i;
	}
	});
    return res;
}

checkMaxLen("Web Development Tutorial");

