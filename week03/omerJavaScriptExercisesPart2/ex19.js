let index = 0

let people = ["Greg", "Mary", "Devon", "James"]
let arr = people.slice()

const functionToCall = [
    function1, 
    function2,
    function3,
    function4,
    function5,
    function6,
    function7,
    function8,
    function9,
    function10,
    function11
]

document.getElementById('next').addEventListener('click', function() {
    
    let result = functionToCall[index](arr)
    
    document.getElementById('result').innerHTML += `${index+1} function result: ${result}<br>`
    
    index++
    if (index === functionToCall.length) {
        document.getElementById('next').disabled = true
    }
    until = functionToCall.length
})

document.getElementById('reset').addEventListener('click', function() {
    index = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('next').disabled = false;
})

function function1(arr){
    result = ''
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ","
    }
    return result
}

function function2(arr) {
    
    arr.shift()
    result = arr
    return result
}

function function3(arr) {

    arr.pop()
    result = arr
    return result
}

function function4(arr) {
    
    arr.unshift("Matt")
    result = arr
    return result
}

function function5(arr) {
    
    arr.push("Alexey")
    result = arr
    return result
}

function function6(arr) {
    result = ''
    for (let i = 0; i < arr.length; i++) {
        
        result += arr[i] + ","
        if (arr[i] === "Mary") {
            break
        }
    }
    return result
}

//I using here "filter" method, not "slice". Or I could use "slice" method, but hardcode the indexes
//I think filter method is more elegant
function function7() {
    result = arr.filter(name => !name.startsWith('M'))
    return result
}

function function8(arr) {
    result = `Index of element Mary is ${arr.indexOf("Mary")}`
    return result
}

function function9(arr) {
    result = `Index of element Foo is ${arr.indexOf("Foo")}`
    return result   
}

function function10() {
    people.splice(2, 1, "Elizabeth", "Artie")
    return people
}

function function11() {
    withBob = people.concat("Bob") 
    return withBob
}
