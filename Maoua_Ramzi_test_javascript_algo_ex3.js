import {
    isNumber,
    allDifferentNumber,
    numberRange,
    checkRow
} from './Maoua_Ramzi_test_javascript_algo_ex2.js'


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
