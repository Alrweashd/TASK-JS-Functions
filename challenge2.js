/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
greet("Turki");
function isOdd(n) {
  if(n%2!==0){
    return true;
  }
    return false;
  
}
console.log(isOdd(7));
console.log(isOdd(10));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let flag = 0;
  let preOdd = n; //iterating from the next odd
  if (isOdd(preOdd)){
    preOdd=n-2; // to get to the previous odd in case if n is odd
  } else{
    preOdd=n-1; // to get to the previous odd in case if n is even
  }

  while(preOdd>=1){
    flag++;
    preOdd=preOdd-2;
  }
  return flag;
}
console.log(oddsSmallerThan(8));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (isOdd(n)){
    return n*n;
  }
    return 2*n;
}

console.log(squareOrDouble(3));
