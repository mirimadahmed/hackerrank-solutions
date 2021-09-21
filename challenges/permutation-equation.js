// Complete the permutationEquation function below.
function permutationEquation(p) {
    // new array to store resuts of sequence
    const result = new Array(p.length);
    
    // loop the input
    for(const i of p) {
        result[p[p[i-1]-1]-1] = i;
    }
    
    return result;
}
