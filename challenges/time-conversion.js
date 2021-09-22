/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    
    // Find if AM or PM
    // if AM and 12 set it to 00
    // if PM and more than 12 add 12 to it
    // ignore the AM PM and return
    
    // 07:05:45PM
    //         ^ 
    let lastTwo = s.substring(8);
    
    // ignoring AM PM
    let fullTime = s.substring(0, 8);
    
    // array for test
    let times = fullTime.split(':');
    
    if(lastTwo === "PM") {
        if(times[0] !== "12") {
            times[0] = parseInt(times[0]) + 12;
        }
    } else {
        // AM case
        if(times[0] === "12") {
            times[0] = "00";
        }
    }
    
    return times.join(':');
}
