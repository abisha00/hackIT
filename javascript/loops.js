//write a program to print Hello World 10 times
for(let i=1; i<=20; i++){
    i+=1
    console.log(i)
}
//WAP to print
//1 is odd because it is not divisible by 2
//2 is even because it is divisible by 2
//3 is odd because it is not divisible by 2
//4 is even because it is divisible by 2
//upto 20
for(let i=1; i<=20; i++){
    if(i%2 === 0){
        console.log(`${i} is even because it is divisible by 2`)
    }
    else{
        console.log(`${i} is odd because it is not divisible by 2`)
    }
}
//using ternary operator
for(let i = 1; i<=20; i++){
    i%2===0 ? console.log(`${i} is even because it is divisible by 2`) :console.log(`${i} is odd because it is not divisible by 2`)
}

