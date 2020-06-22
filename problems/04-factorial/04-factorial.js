/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  if (sumNum == 0){
      return 1; // 0! = 1, base case
  }
  else{
      return sumNum*factorial(sumNum-1);
  }
}

console.log(factorial(5)); //should return recursively 5*4*3*2*1 = 120
console.log(factorial(10)); 
console.log(factorial(0)); 