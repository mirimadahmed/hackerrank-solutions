// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    // find tallest number in array
    // count how many times it occurs and return
    let tallest = Math.max(...ar);
    let sum = 0;
    ar.forEach(item => {
        if(item == tallest) {
            sum += 1;
        }
    });
    // simple eh?
    return sum;
}
