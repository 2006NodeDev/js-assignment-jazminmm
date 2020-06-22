/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
            if (Number.isInteger(someNum/2) == true){
                return true;
            }
            else{
                return false;
            }
}
console.log(isEven(0)); //should return true
console.log(isEven(1)); //should return false
console.log(isEven(2)); //should return true
console.log(isEven(3)); //should return false
console.log(isEven(4)); //should return true
console.log(isEven(5)); //should return false