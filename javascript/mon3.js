//1. sum all the number from 1-100

/*let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum of numbers from 1 to 100:", sum);*/

//2.i<=50 instead i<=100

/*let sum = 0;

for (let i = 1; i <=50; i++) {
    sum += i;
}

console.log("Sum of numbers from 1 to 100:", sum);*/

//3.while loop that print no. 1-100

/*let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}*/

//4. how can you modify the condition to only print odd number between 1 -100
//using while loop:


/*let i = 1;

while (i <= 100) {
    console.log(i);
    i += 2; // Increase by 2 to skip even numbers
}*/

//using if loop:

/*let i = 1;

while (i <= 100) {
    if (i % 2 !== 0) { // Check if `i` is odd
        console.log(i);
    }
    i++; // Increment by 1
}*/

//Here's a for loop that sums numbers from 1 to 50, but it breaks if the sum exceeds 100

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
    
    if (sum <+100) {
        console.log("Breaking the loop as sum exceeded 100.");
        break;
    }
}

console.log("Final Sum:", sum);


