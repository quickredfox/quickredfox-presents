/*comment
 Author:    Unknown
 Copyright: Public Domain
 Source:    http://interglacial.com/hoj/hoj.html

 Description: 

   Decimal and Hexadecimal Conversions

 Example:
 (code)

   Conversions.dec2hex('255') // => 'FF'
   Conversions.hex2dec('ff')  // => 255 

 (end)
end*/
var Conversions = (function() {
   function _int (s) {
     return(
       (isNaN(s) || !isFinite(s)) ? undefined
       : (s == 0) ? 0
       : (s >  0) ? Math.floor(s)
       : (s <  0) ? Math.ceil( s)
       :            undefined
       );
    };
    var C = {
        dec2bin: function(dec) {
           if(n<0) throw "Usage: binary(nonnegative)";
           if(n == 0 || n == 1) return n.toString();
           var k = _int(n/2);
           var b = n % 2;
           var E = C.dec2bin(k);
           return E.toString() + b.toString();
           
        },
        bin2dec: function(bin) {
            return (parseInt(hex, 16));
        }
    };
    return C;
})();