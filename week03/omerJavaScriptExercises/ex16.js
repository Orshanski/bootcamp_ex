function getInput() {
    var input = document.getElementById("inputText").value;
    return input;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (event) {
        buttonClicked(event.target.value);

    });
});

function buttonClicked(buttonValue) {
    var input = getInput();
    if (input === "") {
        document.getElementById("outputText").innerHTML = "Please enter a password.";
        return;
    }
    var output = "";
    switch (buttonValue) {
        case "one":
            output = validatePassword1(input);
            break;
        case "two":
            output = validatePassword2(input);
            break;
        case "three":
            output = validatePassword3(input);
            break;
        default:
            output = validatePassword4(input);
    }
    output = "Function " + buttonValue + " says: " + output + " password.";
    document.getElementById("outputText").innerHTML = output;
}

function validatePassword1(password) {
    clearOutput();
    if (password.length > 7) {
        return "Strong" ;
    } else {
        return "Weak";
    }
}

function validatePassword2(password) {
    clearOutput();
    var output = password.length > 7 ? "Strong" : "Weak";
    return output;
}

function validatePassword3(password) {
    clearOutput();
    var output = password.length > 7 && /[a-z]/i.test(password) ? "Strong" : "Weak";
    return output;
}


function validatePassword4(password) {
    clearOutput();
    if (password.length > 7 && /[A-Z]/.test(password)) {
        return "Very Strong";
    } else if (password.length === 7) {
        return "Strong";
    } else {
        return "Weak";
    }
}

function clearOutput() {
    document.getElementById("outputText").value = "";
}

function getOutput() {
    var output = document.getElementById("outputText").value;
    return output;
}

