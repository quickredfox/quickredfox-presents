/*comment
 Author: Douglas Crockford
 Copyright: Copyright 2008
 License: Not Specified 
 Source: http://javascript.crockford.com
 Description: 
 
     Remedial Javascript As Proposed by Douglas Crockford
 Example:
 (code)
     // see: http://javascript.crockford.com/remedial.html
 (end)
end*/

var Remedial = (function(){
   
   String.prototype.entityify = function () {
       return this.replace(/&/g, "&amp;").replace(/</g,
           "&lt;").replace(/>/g, "&gt;");
   };
   
   String.prototype.quote = function () {
       var c, i, l = this.length, o = '"';
       for (i = 0; i < l; i += 1) {
           c = this.charAt(i);
           if (c >= ' ') {
               if (c === '\\' || c === '"') {
                   o += '\\';
               }
               o += c;
           } else {
               switch (c) {
               case '\b':
                   o += '\\b';
                   break;
               case '\f':
                   o += '\\f';
                   break;
               case '\n':
                   o += '\\n';
                   break;
               case '\r':
                   o += '\\r';
                   break;
               case '\t':
                   o += '\\t';
                   break;
               default:
                   c = c.charCodeAt();
                   o += '\\u00' + Math.floor(c / 16).toString(16) +
                       (c % 16).toString(16);
               }
           }
       }
       return o + '"';
   };

   String.prototype.supplant = function (o) {
       return this.replace(/{([^{}]*)}/g,
           function (a, b) {
               var r = o[b];
               return typeof r === 'string' || typeof r === 'number' ? r : a;
           }
       );
   };
   
   String.prototype.trim = function () {
       return this.replace(/^\s+|\s+$/g, "");
   };
   
   // Do whatever you want here
   var R = {
      typeOf: function(value) {
          var s = typeof value;
          if (s === 'object') {
              if (value) {
                  if (typeof value.length === 'number' &&
                          !(value.propertyIsEnumerable('length')) &&
                          typeof value.splice === 'function') {
                      s = 'array';
                  }
              } else {
                  s = 'null';
              }
          }
          return s;
      },
      isEmpty: (o) {
          var i, v;
          if (typeOf(o) === 'object') {
              for (i in o) {
                  v = o[i];
                  if (v !== undefined && typeOf(v) !== 'function') {
                      return false;
                  }
              }
          }
          return true;
      }
     
   }
   return R;
})(); 







