// if divisible with 3 add fizz
// if divisible with 5 add buzz
// if both add fizz buzz 

var result = [];

function fizzBuzz(){

    if ( (result.length + 1) % 15 === 0) {
         result.push("FizzBuzz");
         return result;
    } else if ( (result.length + 1) % 5 === 0 ){
         result.push("Buzz");
         return result;
    } else if ( (result.length + 1) % 3 === 0 ){
         result.push("Fizz");
        return result;
    } else {
         result.push(result.length + 1);
        return result;
    }

}



