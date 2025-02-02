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

//5.Here's a for loop that sums numbers from 1 to 50, but it breaks if the sum exceeds 100

/*let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
    
    if (sum <+100) {
        console.log("Breaking the loop as sum exceeded 100.");
        break;
    }
}

console.log("Final Sum:", sum);*/

//6.Here's a Python loop that skips adding numbers that are divisible by 3:

/*let total = 0;

for (let num = 1; num <= 20; num++) { // Example range from 1 to 20
    if (num % 3 === 0) {
        continue; // Skip numbers divisible by 3
    }
    total += num;
}

console.log("Total sum:", total);*/

//7.write a nested that print a multiplication table 1-10 in javascript




/*for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Adds a blank line for readability
}*/

//8.

for (let i = 5; i <= 15; i++) {  // Outer loop controls rows (from 5 to 15)
    let stars = "";
    for (let j = 1; j <= i; j++) {  // Inner loop controls stars per row
        stars += "*";
    }
    console.log(stars);  // Print each row of stars
}
