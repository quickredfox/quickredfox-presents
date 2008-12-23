flensed.getObjectById = function(idStr)

/*comment
 Author: Kile Simpson
 Copyright: Copyright 2008 Kile Simpson
 License: MIT
 Source: http://www.flensed.com
 Description: 

      See: http://www.flensed.com/about.php     

 Example:
 (code)
   flensed.getObjectById('myobject') // returns element Object;
 (end)
end*/

var flensed = (function() {
    // Do whatever you want here
    var self = {
        getObjectById: function(stringId) {
            try {
                if (document.layers) {
                    return document.layers[stringId];
                }
                else if (document.all) {
                    return document.all[stringId];
                }
                else if (document.getElementById) {
                    return document.getElementById(stringId);
                }
            }
            catch(err) {}
            return null;
        };
    }
    // Dont forget to return your whatever
    return self;
})();
// important!
