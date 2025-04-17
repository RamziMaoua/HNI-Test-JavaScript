
//A function that calls checkRow function for every Row
function checkGridRows (grid) {
    if (grid.length != 9 || !(grid.every(row => row.length == 9))){
        throw new Error("Not a 9x9 grid.");
    }
    for(let i=0 ; i<grid.length; i++) {
        let row = grid[i];
        if(!(checkRow(row))){
            console.log('There is an error in the line');
            let errorLine = [`Line ${i+1} incorrect`].concat(row);
            return errorLine;
        }
    }
    return true
}

//A function that converts Columns in an array (row) and calls checkRow function for every column
function checkGridColumns (grid) {
    if (grid.length != 9 || !(grid.every(row => row.length == 9))){
        throw new Error("Not a 9x9 grid.");
    }

    for(let i=0 ; i<grid.length; i++) {
        //Making a list consisting of the numbers in a column so we can check it as a "row"
        let column = [];
        for(let j=0; j<9 ; j++){
            column.push(grid[j][i]);
        }
        if(!(checkRow(column))){
            console.log('There is an error in the column');
            let errorLine = [`Column ${i+1} incorrect`].concat(column);
            return errorLine;
        }
    }
    return true
}



//Create a table conatining the first detected anomalies in rows, columns in a HTML Document
function displayAnomaly(grid) {
    
    //Our sudoku grid on page
    displayGrid(grid)

    //create a HTML table
    let anomalyTable = document.createElement('table');

    //Customize a bit with Bootstrap for better View
    anomalyTable.classList.add('table', 'table-bordered','w-auto','mx-auto','my-5')
    let anomalyResult =[] ;

    //Check Rows
    if (checkGridRows(grid) !== true ){
        anomalyResult.push(checkGridRows(grid));
    }

    //Check Columns
    if (checkGridColumns(grid) !== true){
        anomalyResult.push(checkGridColumns(grid));
    }

    //If there is no mistake, we input a message
    if (anomalyResult == []){
        anomalyResult.push("No mistake")
    }

    for (let i=0 ; i<anomalyResult.length; i++){
        let row = anomalyResult[i];
        let anomalyRow = anomalyTable.insertRow();
        for (let j=0 ; j<row.length; j++){
            let cell = row[j];
            let anomalyCell = anomalyRow.insertCell();
            anomalyCell.textContent = cell ;
        }
    }
    //Display Our grid on the page (body)
    document.body.appendChild(anomalyTable);

}

displayAnomaly(convertLineToTable(array_number))
