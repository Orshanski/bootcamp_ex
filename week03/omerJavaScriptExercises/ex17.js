document.getElementById("submitColor").addEventListener("click", main);

function main() {
    color = document.getElementById("colorInput").value;
    document.getElementById("colorType").innerHTML = getColorType(color);

}

function getColorType(color) {
    
    const hasChair = /[a-z]/.test(color.toLowerCase());
    
    if (color === '') {
        return 'No color entered';
    }
    
    if (hasChair === false) {
        return 'Color must contain only letters';
    }

    switch (color.toLowerCase()) {
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
