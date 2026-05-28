// First lets create a basic grid, default value (on page load) is 16x16
function createGrid(gridSize = 16) {
    const divContainer = document.querySelector("div.container");
    for (let y = 0; y < gridSize; y++) {
        const divRow = document.createElement("div")
        divContainer.appendChild(divRow)
        for (let x = 0; x < gridSize; x++) {
            const divCol = document.createElement("div");
            divCol.classList.add("gridSquare");
            divRow.appendChild(divCol);
        }
    }
    // Now lets allow color altering on mouse hover
    const gridCell = document.querySelectorAll(".gridSquare");
    gridCell.forEach(link => link.addEventListener("mouseenter", (event) => {
        link.classList.add("colored");  
    }));
};

// Creates default grid on page load
createGrid();


// add functionality to the button to build a new grid of size newGridSize
const btn = document.querySelector(".selectSize");
btn.addEventListener("click", (event) => {
    let newGridSize = "";
    while (true) {
        newGridSize = prompt("Enter a value between 1 - 100"); 
        let num = Number(newGridSize)
        if (!isNaN(num) && num >= 1 && num <= 100) {
            break;
        }
    }
    deleteGrid();
    createGrid(newGridSize);
})

// function to delete old grid to be replaced with a new grid when prompted by user
function deleteGrid() {
    const parentDiv = document.querySelector("div.container");
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
}
