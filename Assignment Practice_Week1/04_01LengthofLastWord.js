
console.log("Length of Last Word in a String");
console.log("*******************************");

function LenofLastWord(Sentence) {

sentence = sentence.trim();
let words = sentence.split(" ");
console.log(words);

let lastword = words.at(words.length-1);
console.log("Last Word is: " +lastword);

let lengthofLastWord = words[words.length-1].length;
console.log("Length of the LenofLastWord is: " +lengthofLastWord);
    
}

//let sentence = "I'm learning Playwright ";
let sentence = "   fly me   to   the moon  "
//let sentence ="Hello World"
LenofLastWord(sentence);

