// Complete the repeatedString function below.
function repeatedString(s, n) {
    s = s.split('');
    // s = ''
    if(!s.includes('a')) {
        return 0;
    }
    
    // s = 'a'
    if(s.length == 1) {
        return n;
    }

    // s = 'abc'
    let count = 0;
    s.forEach((c) => {
        if(c == 'a') {
            count++;
        }
    });
    
    // but what about the length n?
    // if as in s is 1
    // as in s * n will be 1 * n
    // repeating tells us how many times we need to repeat the string
    let repeating = parseInt(n/s.length);
    count = count * repeating;
    
    // but what if there are odd characters left
    // n != x*s.length
    let rem = n % s.length;
    for(let i = 0; i < rem; i++) {
        if(s[i] == 'a') {
            count++;
        }
    }
    return count;
}
