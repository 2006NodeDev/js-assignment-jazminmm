/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    //let myString = someStr.split();
    let myString = Array.from(someStr); //make string into array
    let myBackwardsString =  myString.reverse(); //reverse array
   // return myBackwardsString.join(''); //join elements of the array
    let newReversedString = myBackwardsString.join('');

    return newReversedString;

  
}

string1 = "Hello World"
string2 = "Goodbye World"

console.log(reverseStr(string1));

console.log(reverseStr(string2));
