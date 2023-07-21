function fibonacciGenerator (n) {

    var arrayNumbers = [0];
    
    while( arrayNumbers.length < n ) {
        if ( arrayNumbers.length > 1 ){
            arrayNumbers.push( arrayNumbers[arrayNumbers.length - 2] + arrayNumbers[arrayNumbers.length - 1] );
            console.log("true" + arrayNumbers);
        }else {
            arrayNumbers.push(1);
        }
    } 
    
    return arrayNumbers;
    
}

