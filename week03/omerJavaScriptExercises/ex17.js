document.getElementById("submitColor").addEventListener("click", main);

function main() {
    color = document.getElementById("colorInput").value;
    document.getElementById("colorType").innerHTML = getColorType(color);

}

function getColorType(color) {
    
    const hasDigit = /\d/.test(color);
    if (hasDigit) {
        return 'Color cannot contain a number';
    }

    switch (color.toLowerCase()) {
        case '':
            return 'No color entered';
        case 'yellow':
        case 'pink':
        case 'orange':
            return 'Light color';
        case 'blue':
        case 'purple':
        case 'brown':
            return 'Dark color';
        default:
            return 'Unknown color';
    }
}
