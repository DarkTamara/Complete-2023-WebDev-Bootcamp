function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
            var yearsDiff = 90 - age;
    
            var days = Math.floor(yearsDiff * 365);
            var weeks = Math.floor(yearsDiff * 52);
            var months = Math.floor(yearsDiff * 12);
    
            
            return (
                console.log("You have " + days + " days, " + weeks + " weeks, and " + months +" months left."))
        
        
        
        
    /*************Don't change the code below**********/
    }
    