function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const welcome = function() {
    let welcomeMessage = 'Welcome to Appleseeds Bootcamp!';
    return welcomeMessage;
};

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const power = function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
};

function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

const add = function(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
};

const hello = () => "Hello!";

function hello() {
    return "Hello!";
}

const squareRoot = a => Math.sqrt(a);

function squareRoot(a) {
    return Math.sqrt(a);
} 

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;
}