// Write a program that checks if a number is positive, negative, or zero.

let num = prompt("Enter a number");
if (num > 0){
    console.log("The number is positive");
}
else if (num < 0){
    console.log("the number is negative");
}
else{
    console.log("the number is zero");
}

// Write a program that checks if a person is old enough to vote (age ≥ 18).

let voterAge = prompt("Enter your age");
if (voterAge >= 18){
    console.log("You are old enough to vote");
}
else{
    console.log("You are not old enough to vote");
}