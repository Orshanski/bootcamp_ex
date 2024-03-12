function printNumbers() {
    const n = document.getElementById('nInput').value;
    let output = '';
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0 && i.toString().includes('7')) {
            output += 'BOOM-BOOM, ';
        } else if (i % 7 === 0) {
            output += 'BOOM, ';
        } else {
            output += i + ', ';
        }
    }

    document.getElementById('result').textContent = output.slice(0, -2);
}