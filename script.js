 
const textbox = document.querySelector("#textbox");

textbox.addEventListener("input", () =>{
	let charWord = textbox.value; //user input


	charWord = charWord.trim(); //remove whitespaces

	let charLen = charWord.length; //length of characters

	document.querySelector("#charCount").innerHTML = charLen;


	let words = charWord.split(" "); // convert input to array
	
	let strings = words.filter((val) =>{
		return val;
	})
	 document.querySelector("#wordCount").innerHTML = strings.length;	
	

	
});

