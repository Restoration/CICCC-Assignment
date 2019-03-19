function titleCase(str){
	let nStr = str.toLowerCase();
	let ary = nStr.split(' ');
	let text = "";
	ary.filter((i)=>{
		text += i.substring(0, 1).toUpperCase() + i.substring(1)+" ";
	});
	console.log(text);
	return text.slice( 0, -1 );
}

titleCase("I'm a developer");
titleCase("This is jAMes");
titleCase("I AM RYOTA");
