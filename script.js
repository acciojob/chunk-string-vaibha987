function stringChop(str, size) {
  // your code here
	if(str==null){
		return[]
	}

	let chunks=[]
	for(let i=0;i<str.length;i=i+size){
		let chunk=str.substring(i,i+size)
	chunks.push(chunk)
}
	return chunks
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
//alert(stringChop(str, size));
