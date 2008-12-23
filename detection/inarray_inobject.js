/*comment
 Author: Francois Lafortune (aka: quickredfox)
 Copyright: Copyright 2009
 License: MIT
 Description: 

   Detect if an object exists in an array or detect existance ofa key in an object

 Example:
 (code)

     var myArray = [ 'red', 'green', 'blue' ]; 

     Detect.inArray( 'red' , myArray)   // true
     Detect.inArray( 'brown' , myArray) // false

     var myObject = {color: 'blue' };
     Detect.inObject('color',myObject) // true
     Detect.inObject('taste',myObject) // false     

 (end)
end*/

var Detect = (function() {
    var Detect = {
        inArray: function(key, array) {
            return (key in array);
        },
        inObject: function(key, object) {
            return (key.toString() in object)
        }
    }
    return Detect;
})();
