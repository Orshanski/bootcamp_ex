function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const welcome = () => {
    return 'Welcome to Appleseeds Bootcamp!';
};

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const power = a => Math.pow(a, 2);

const squareRoot = a => Math.sqrt(a);

const squareRootResult = ((a) => Math.sqrt(a))(9);

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

const randomNumbersResult = ((a, b) => Math.random() * (a - b) + b)(1, 10);
