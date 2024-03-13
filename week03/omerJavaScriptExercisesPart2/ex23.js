let originalArray = 
    document.getElementById('original_array').value.split(/[ ,;]+/).map(Number);


let newArray = []

//I am writing the function only because it is specified in the exercise.
//I know that I can use the Set object directly
function removeDuplicates(arr){
    newArray = [...new Set(arr)];
}

document.getElementById('get_new_array').addEventListener('click', function(){
    removeDuplicates(originalArray);
    document.getElementById('unique_array').innerHTML = newArray;
});

