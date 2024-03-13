function originalArray() {
    //protecting from leading and trailing spaces
    let str = document.getElementById('original_array').value.trim();
    let originalArray = str.split(/[ ,;]+/).map(Number);
    return originalArray;
}

//I am writing the function only because it is specified in the exercise.
//I know that I can use the Set object directly
function removeDuplicates(arr) {
    newArray = [...new Set(arr)];
    return newArray;
}

document.getElementById('get_new_array').addEventListener('click', main);
    
function main() {
    const pattern = /^[0-9,; ]+$/.test(originalArray());
    console.log(pattern);
    if (pattern === true) {
        newArray = removeDuplicates(originalArray());
        result = newArray.join(', ');
    } else {
        result = 'Array must contain only numbers';
    }
    document.getElementById('unique_array').innerHTML = result;
}