// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // lets take a counter
    let count = 0;
    // lets make a boolean map
    const colors = {};
    // loop the array
    ar.forEach(color => {
        // if the color is already recoded 
        // its a match with pair
        // count it
        // remove the record
        if(colors.hasOwnProperty(color)) {
            count++;
            delete colors[color];
        } else {
            // if color isnt there keep a record
            colors[color] = 0;
            // the value could be anything we just want the key
        }
    })
    // after the loop we return the count
    return count;
}