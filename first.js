// First lets create a basic grid of 16x16 divs
const divContainer = document.querySelector("div.container");

for (let y = 0; y < 16; y++) {
    const divRow = document.createElement("div")
    divContainer.appendChild(divRow)
    for (let x = 0; x < 16; x++) {
        const divCol = document.createElement("div");
        divRow.appendChild(divCol);
    }
}