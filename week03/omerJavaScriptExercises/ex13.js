function isLeapYear(){

    year = document.getElementById("nInput").value;

    function calc(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            document.getElementById("result").textContent = "This is a leap year";
        } else {
            document.getElementById("result").textContent = "This is not a leap year";
        }
    }
    calc(year);
}