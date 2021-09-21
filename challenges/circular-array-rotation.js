// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    // loop and shift a array in k times
    for(let i = 0; i < k; i++) {
        // remember shifting from last video?
        a.unshift(a.pop());
    }
    
    // new array for reporting
    let ar = [];
    // loop and push items from a to ar
    for(let i = 0; i < queries.length; i++) {
        ar.push(a[queries[i]]);
    }
    
    
    // return the queried items
    // lets test now
    return ar;
}
