
console.log("Palindrom");
console.log("********");

let text = 'Madam';
//let text = "Thisis"

    let lowtext = text.toLowerCase().split().join();

    let reversed = '';

    for(let index = lowtext.length-1; index >= 0; index--) {

        reversed = reversed + lowtext[index];

    }

    console.log("Reversed String: " +reversed);

    if(lowtext == reversed) {

        console.log("True - Palindrom");
    }

    else {
        console.log("False - Not Palindrom");
    }

