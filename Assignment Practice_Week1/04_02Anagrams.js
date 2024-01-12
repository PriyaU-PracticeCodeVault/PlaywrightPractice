console.log("Anagrams");
console.log("********");

function Anagrams(word1, word2) {
    
    let SortWord1 = word1.toLowerCase().split('').sort().join();
    let SortWord2 = word2.toLowerCase().split('').sort().join();

    console.log(word1+ " Splited and sorted: " +SortWord1);
    console.log(word2+ " Splited and sorted: " +SortWord2);

if(SortWord1==SortWord2) {

    console.log("Given Strings: " +word1+ " and " +word2+ " are Anagrams");

}

else {
    console.log("Given Strings: " +word1+ " and " +word2+ " are not Anagrams");
}
    console.log();
}

Anagrams('silent', 'Listen')
Anagrams('Hello', 'World')
