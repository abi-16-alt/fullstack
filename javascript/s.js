function sumArray(numbers) {
       return numbers.reduce((acc, num) => acc + num, 0);
   }
   
   const values = [10, 20, 30, 40, 50];
   const total = sumArray(values);
   
   console.log("The total sum is:", total); // Output will appear in the terminal
   