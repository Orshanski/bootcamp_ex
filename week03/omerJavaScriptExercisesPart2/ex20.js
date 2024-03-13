function originalArray() {
    //protecting from leading and trailing spaces
    let str = document.getElementById('original_array').value.trim();
    let originalArray = str.split(/[ ,;]+/)
    console.log(originalArray);
    return originalArray;
}

document.getElementById('get_result_array').addEventListener("click", main)

function main() {

    let result = [];
    let original_array = originalArray();
    original_array.forEach(element => {
        result.push(element.length);
    });
    document.getElementById('result_array').innerHTML = result;
}    