// /HOISTING AND TEMPORAL DEAD ZONE IN JAVASCRIPT 

console.log(x)
var x = 10
// this prints undefined instead od error cuz of hoisting

greet();

function greet(){
    console.log("greetings")
}
// the function prnits the value accurately because of hoisting completely

console.log(y)
let y = "string"

foo(); // TypeError: foo is not a function — foo IS undefined here, hoisted like var
var foo = function() { };