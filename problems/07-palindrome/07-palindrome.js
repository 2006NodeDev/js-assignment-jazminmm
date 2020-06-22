/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let myString = Array.from(someStr); //make string into array
    let myBackwardsString =  myString.reverse(); //reverse array

        if (myString == myBackwardsString){
            return true;
        }
        else{
            return false;
        }
    

  
}

string1 = "madam"
string2 = "cat"

console.log(isPalindrome(string1)); //should return true
console.log(isPalindrome(string2)); //should return false