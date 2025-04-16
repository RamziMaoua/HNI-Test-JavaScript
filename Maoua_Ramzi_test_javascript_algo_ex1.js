import {array_number} from'./Javascript_test_je1.js';


//Create an empty 2d array (table) of dimension 9x9
export const createGrid = () => {
    let rows = new Array(9);
    console.log(rows)
    for (let i =0; i< rows.length; i++){
        rows[i] = new Array(9);
    }
    return rows;
} 

let to_verify = createGrid()

export const convertLineToTable = (lineGrid) => {
    let result = new Array(9);
    for (let i=0; i< result.length; i++){
        result[i] = lineGrid[i].split(" ").map(cell => parseInt(cell));
    }
    return result
};


//Create a grid in a HTML Document
export function displayGrid (grid) {
    //create a HTML table
    let sudokuGrid = document.createElement('table');
    //Customize a bit with Bootstrap for better View
    sudokuGrid.classList.add('table', 'table-bordered','w-auto','mx-auto','my-5')

    //Create each row and cell in our HTML Table, and fill with our grid values
    for (let i=0 ; i<grid.length; i++){
        let row = grid[i];
        let sudokuRow = sudokuGrid.insertRow();
        for (let j=0 ; j<row.length; j++){
            let cell = row[j];
            let sudokuCell = sudokuRow.insertCell();
            sudokuCell.textContent = cell ;
        }
    }
    //Display Our grid on the page (body)
    document.body.appendChild(sudokuGrid)

}

displayGrid(convertLineToTable(array_number))