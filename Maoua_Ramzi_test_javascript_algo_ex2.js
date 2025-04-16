
//Verify that the cell is indeed a number
export function isNumber (cell) {
    return typeof cell === 'number';
}

//Check if all numbers in the row are different
export function allDifferentNumber (list) {
    for (let i=0 ; i<list.length ; i++){
        for (let j=i+1 ; j<list.length ; j++){
            if(list[i] === list[j]){
                return false;
            }
        }
    }
    return true;
}

//Verify if the number in the cell is between 1 and 9
export function numberRange(cell){
    return cell >= 1 && cell <= 9;
}



//Function to verify that the line is composed of only differnt numbers from 1 to 9
export function checkRow(row) {
    if (row.length != 9){
        throw new Error("Not a 9-cell row.");
    }
    return allDifferentNumber(row) && row.every(isNumber) && row.every(numberRange);
}



