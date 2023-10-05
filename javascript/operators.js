
// // // //Type coercion: It is the default behaviour of javascript that forecefully changes one datatype to another datatype to execute the operations successfully. 
// // // // Type conversion: It is the method to convert one datatype to another datatype by the user for output.
// // // parseInt("20.5")

// // // //short circuiting
// // // // AND operator
// // // let age=18 
// // // let hasvoterid= true
// // // if(age>=18&& hasvoterid)
// // // { 
// // //     console.log("Go to vote")

// // // }
// // // //age>=18&& has voted && console.log("Go to vote") 
// // // //falsy value--- "", 0,-0,0n, NaN, false, null, undefined
// // // //using OR operator
// // // let firstname= "Ram"
// // // let lastname= "Thapa"
// // // let username= 
// // // username== false 

// // // //5. Special Operators
// // // //a. Ternary (conditional) Operator: It is the shorthand of IF Else Statement. Since it is an operator it can be stored in a variable. 
 
// // // //syntax:
// // // // condition ? code to be executed if the condition true :code to be executed if the condition false
// // // //WAP to check if you're eligible to vote
// // // let age=17
// // // if(age>=18){
// // //     console.log(`You are eligible to vote`)
// // // }
// // // else{
// // //     console.log(`You aren't eligible to vote`)
// // // }
// // let age=17
// // console.log(age >= 18 ? `you are eligible to vote`:`you arenot eligible to vote`)
// let age=17
// let outputString= age>=18 ? `you are eligible to vote `: `you arenot eligible to vote`
// console.log(outputString)
let age=20 
let canvote = age >=18
console.log(canvote)



