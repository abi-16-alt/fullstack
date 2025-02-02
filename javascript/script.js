//Sure! Here are three different ways to calculate the sum of an array of numbers in JavaScript:

//1. Using a for loop
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15

//2. Using the reduce method
//const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

//const numbers = [1, 2, 3, 4, 5];
//console.log(sumArray(numbers)); // Output: 15

//3. Using the forEach method
//function sumArray(arr) {
    //let sum = 0;
    //arr.forEach(num => sum += num);
    //return sum;
//}

//const numbers = [1, 2, 3, 4, 5];
//console.log(sumArray(numbers)); // Output: 15
