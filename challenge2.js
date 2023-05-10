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
  // Your code here
  if(n%2!==0){
    return true;
  }
  else{
    return false;
  }
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
  // Your code here
  let flag = 0;
  let preOdd = n-2;//iterating from the next odd
  while(preOdd>=1 && isOdd(preOdd)){
    flag++;
    preOdd=preOdd-2;
  }
  return flag;
}
console.log(oddsSmallerThan(15));

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
  // Your code here
  if (isOdd(n)){
    return n*n;
  }else{
    return 2*n;
  }
}
console.log(squareOrDouble(3));
