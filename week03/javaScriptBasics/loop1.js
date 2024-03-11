const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for (let i in names) {
    names[i] = { name: names[i], age: ages[i] };
}

const nm = document.getElementById("names")

function displayNames() {    
    for (let i in names) {
        const nameElement = document.createElement("li");
        nameElement.innerHTML = `${names[i].name} is ${names[i].age} years old.`;
        nm.appendChild(nameElement);
    }
}

displayNames();