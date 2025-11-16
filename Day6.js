//  Create a function greetUser(name) that says hello to the person.

function greet(name){
    console.log("hello " + name);
}
greet("lukman");

// Create a function addNumbers(a, b) that returns their sum.

function addNumbers(a,b){
    console.log(a+b);
}
addNumbers(10,20);

//  Create a function isEven(num) that returns true if a number is even, otherwise false.

function isEven(num){
    if(num%2 == 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
isEven(22);