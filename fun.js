

function matrixSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++) {
           
            sum += arr[i][j];
        }
    }
    return sum;
}

module.exports = { matrixSum };