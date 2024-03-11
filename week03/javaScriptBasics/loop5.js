const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

let list = document.getElementById("list");

for (let key of Object.keys(dictionary)) {
    const li = document.createElement("li");
    li.innerText = `Words that begin with letter: ${key}`;
    list.appendChild(li);
    const ul = document.createElement("ul");
    li.appendChild(ul);
    for (let word of dictionary[key]) {
        const li = document.createElement("li");
        li.innerText = word;
        ul.appendChild(li);
    }
}

