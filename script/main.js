//const
const chx = document.getElementById('chx');

//let
let gridHead = document.getElementsByClassName("grid-head");
let grid = document.getElementById("grid");

let blockRow;
let lomi;


function colorBlack(e) {
  e.target.style.backgroundColor = "black";
}

function drawGrid() {
    reset();
    let col = document.getElementById("col").value;
    let rows = document.getElementById("rows").value;

    if(col === "" || rows === ""){
        alert("Please enter value for columns and rows!");
        return;
    }else if(col >= 19){
        alert("Maximum size of rows is 18");
        return;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {
        blockRow = document.createElement("div");
        blockRow.classList.add("blockRow");
        grid.appendChild(blockRow);
        blockRow.addEventListener("mouseenter", colorBlack);
        }
        lomi = document.createElement("br");
        grid.appendChild(lomi);
    }
}

function reset(){
    grid.innerHTML = "";
}
if(grid.children){
    grid.innerHTML = "let's draw some grid :)";
    grid.fontFamily = "Roboto";
}

chx.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});