
// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -63;
    const a = arr;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            let sum = a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 1][j + 1] + a[i + 2][j] + a[i + 2][j + 1] + a[i + 2][j + 2];
            if(sum > max) {
                max = sum;
            }
        }
    }
    return max;
}
