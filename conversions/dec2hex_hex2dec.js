/*comment
 Author:    Unknown
 Copyright: Public Domain
 Source:    http://github.com/quickredfox/jsgouache/tree/master
 
 Description: 
 
   Decimal and Hexadecimal Conversions
     
 Example:
 (code)
 
   Conversions.dec2hex('255') // => 'FF'
   Conversions.hex2dec('ff')  // => 255 
   
 (end)
end*/
var Conversions = (function(){
   var C = {
      dec2hex: function(dec){ var hexDigits = "0123456789ABCDEF".split(''); return (hexDigits[dec>>4]+hexDigits[dec&15]); },
      hex2dec: function(hex){ return(parseInt(hex,16)); }
   };
   return C;
})();

