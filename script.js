 
const textbox = document.querySelector("#textbox");

textbox.addEventListener("input", () =>{
	let charWord = textbox.value; //user input


	charWord = charWord.trim(); //remove whitespaces

	let charLen = charWord.length; //length of characters

	document.querySelector("#charCount").innerHTML = charLen;


	let wordsArr = charWord.split(" "); // convert words to array
	
	let words = wordsArr.filter((val) =>{
		return val;
	})
	 document.querySelector("#wordCount").innerHTML = words.length;	
	

	
});

