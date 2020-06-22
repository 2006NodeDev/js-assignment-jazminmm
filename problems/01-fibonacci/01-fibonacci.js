/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if (n<=1){ 
        return n //if n is 0 or 1 it will return n "base case"
    }
        return fib(n-1)+fib(n-2); //recursively calls on fib(n)
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(10));
