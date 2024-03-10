const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = document.getElementById("result");
const first = document.getElementById("firstState");

first.innerHTML = numbers; // Output: 1,2,3,4,5,6,7,8,9,10
// Delete the second and third elements
numbers.splice(1, 2);

// Change the fourth element to 1
numbers[3] = 1;

// Delete the last 4 elements
numbers.splice(-4, 4);

// Add another element 0 to the beginning of the array
numbers.unshift(0);

// Print the modified array
console.log(numbers); // Output: [0, 1, 4, 5, 1]

result.innerHTML = numbers; // Output: 0,1,4,5,1