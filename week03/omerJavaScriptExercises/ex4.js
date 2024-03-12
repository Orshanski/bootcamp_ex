function calculateArea() {
    let radius = document.getElementById('radius').value;
    let area = Math.PI * radius * radius;
    document.getElementById('result').innerHTML = `The area of the circle is: ${area} <br> The area of the circle rounded to two decimal places is: ${area.toFixed(2)}`;
}