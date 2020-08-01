//const
const chx = document.getElementById('chx');

//let
let grid = document.getElementById("grid");
let submitButton = document.getElementById('submit');
let pageHeading = document.getElementById("comp-name");
let gridHead = document.getElementById("grid-head");
let label = document.getElementById('label');
let ball = document.getElementById('ball');

let paragraphs = document.getElementsByTagName("p");
let inputs = document.querySelectorAll('input');

let theme = true;

let blockRow;
let lomi;

function drawGrid() {
    reset();
    let col = document.getElementById("col").value;
    let rows = document.getElementById("rows").value;

    if(col === "" || rows === ""){
        alert("Please enter value for columns and rows!");
        return;
    }else if(col >= 19){
        alert("Maximum size of columns is 18");
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

function colorBlack(e) {
    if(document.body.classList === "dark"){
        e.target.style.backgroundColor = "white";
    }else{
        e.target.style.backgroundColor = "black";
    }
}
  
function reset(){
    grid.innerHTML = "";
}
if(grid.children){
    grid.innerHTML = "let's draw some grid :)";
    grid.fontFamily = "Roboto";
    grid.style.color = "black";
}

chx.addEventListener('change', () => {
    if(theme){
        theme = false;
    }else{
        theme = true;
    }
    if(theme === false){
        grid.style.color = "white";
    }else{
        grid.style.color = "black";
    }
    document.body.classList.toggle('dark');
    submitButton.classList.toggle('dark');
    pageHeading.classList.toggle('dark');
    gridHead.classList.toggle('dark');
    label.classList.toggle('dark');
    ball.classList.toggle('dark');

    for(let i = 0; i < paragraphs.length; i++){
        paragraphs[i].classList.toggle('dark');
    }
    for(let i = 0; i < inputs.length; i++){
        inputs[i].classList.toggle('dark');
    }
    
});