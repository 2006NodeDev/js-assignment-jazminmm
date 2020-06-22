/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(someStr=== undefined || startIndex === undefined || endIndex === undefined){
        throw("Please enter valid input.");
    }
    else if (startIndex<0 || someStr.length<startIndex){
        throw("Please start at a valid index.")
    }
    else if(endIndex<startIndex || someStr.length<endIndex){
        throw("Please end at a valid index")
    }
    else{
        let myStr = ""
        for(i=startIndex; i<endIndex; i++){
            myStr+=someStr[i];
        }
        return myStr;
    }

}

try{
    let newStr = substring("Maravilla", 0, 4);
    console.log(newStr);
} catch (e){
    console.error(e);
}
try{
    let newStr = substring("Maravilla", 0, 6);
    console.log(newStr);
} catch (e){
    console.error(e);
}