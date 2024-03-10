function compareAndPrintWeb() {
    const p1 = {
        name: document.getElementById('name1').value,
        age: parseInt(document.getElementById('age1').value, 10),
        city: document.getElementById('city1').value
    };

    const p2 = {
        name: document.getElementById('name2').value,
        age: parseInt(document.getElementById('age2').value, 10),
        city: document.getElementById('city2').value
    };

    let message = '';
    if (p1.age === p2.age) {
        if (p1.city === p2.city) {
            message = "Jill wanted to date Robert";
        } else {
            message = "Jill wanted to date Robert, but couldn’t";
        }
    }

    document.getElementById('result').textContent = message;
}
