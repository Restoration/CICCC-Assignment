function typeCheck(val){
	if(typeof val == 'number'
	|| typeof val == 'string'
	|| typeof val == 'boolean'){
		console.log(typeof val);
		return typeof val;
	}
	return;
}

let check = [[1,2],7,'','string',{},null,true,false];
for(let i =0; i < check.length; i++ ){
	typeCheck(check[i]);
}