/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

const printName = () => console.log(`My name is Turki`);
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
printName();


const printAge = (brith) => console.log(`I'm ${2023-brith}`);
printAge(1998);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, lang){
    let greet=["Hello","Hola","Bonjour","Merhaba"];

    if (lang=="en") i=0
    else if(lang=="es") i=1
    else if(lang=="fr") i=2
    else if(lang=="tr") i=3

    console.log(`${greet[i]} ${name}`);
}
printHello("Turki","tr");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax (num1, num2){
    if(num1>num2) return num1;
    else if (num2>num1) return num2;
    else return "they are equall";
}

console.log(printMax(9,9));