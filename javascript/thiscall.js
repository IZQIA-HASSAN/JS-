// // Basic call 

// const car =
//  {
//     brand : "Toyota"
// };
// function describe(model ,year){
//     console.log(`${this.brand} ${model} ${year}`)
// }

// describe.call(car , "corolla" , 2026)


// // Apply baisc
// const nums = [2,1,3,2,10]
// console.log(Math.max.apply(null, nums))


// // bind basics 
// const wallet = {balance :100}

// function withdraw(amount){
//     this.balance -=amount
//     console.log(`Balance : ${this.balance}`)
// }
// const withdrawfrom = withdraw.bind(wallet)
// withdrawfrom(30)
// withdrawfrom(20)
// // withdrawfrom(50)

// const user = {
//     name : "Ali",
//     greet : function (){
//         console.log(this.name)
//     }
// };
// user.greet()

const user= {
    name : "Ali",
    greet :function(){
        console.log(this.name)
    }
};

const gretfn = user.greet
gretfn()