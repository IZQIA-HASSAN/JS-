// Lexical Scope: The rule that a function can access variables based on where it is written in the code (its physical location/nesting), not where or how it is called.
// Closure: When a function keeps access to (remembers) the variables from its lexical scope, even after the outer function has finished executing.


// CLOSURES
function counter(){
let count = 0 ;
return function()
{
    count = count  + 1 ;
    console.log(count)
};
}
const  coun = counter()
coun()  
coun()
coun()


// LEXICAL SCOPING
function a (){
    const x = 10;
    b();

    function b(){
        console.log(x)

    }
}
a()


const city = "karachi"

function city1(){
    console.log(city)
   
}

function city2(){
    const city = "ahmedabad"
        city1()
    }

city2()