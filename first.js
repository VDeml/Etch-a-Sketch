// First lets create a basic grid of 16x16 divs
const divContainer = document.querySelector("div.container");

for (let y = 0; y < 3; y++) {
    const divRow = document.createElement("div")
    divContainer.appendChild(divRow)
    for (let x = 0; x < 3; x++) {
        const divCol = document.createElement("div");
        divCol.classList.add("gridSquare");
        divRow.appendChild(divCol);
    }
}

// Now lets alter box color on mouse hover
const gridCell = document.querySelectorAll(".gridSquare")
Array.from(gridCell).forEach(link => link.addEventListener("mouseenter", (event) => {
    console.log("You hovered over 'gridCell'")
    link.classList.add("colored");
}));
