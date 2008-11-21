/*comment
 Author: Author's Name
 Copyright: Copyright Notice (optional)
 License: License (optional)
 Source: http://athorshomepage.com/blog (optional)
 Description: 
 
     You can enter a description on a separate block
     as long as it's properly indented like here.
     
     A proper description is required!
     
 Example:
 (code)
     // In this block, you can also write lots a documentation 
     // but make sure you've read the size rules

     Stating.the("Obvious") // => "Duh!"
     
 (end)
end*/

var Stating = (function(){
   // Do whatever you want here
   var S = {
     the: function(string){
       if (string.toLowerCase() == 'obvious')
         return 'Duh!'
       else
         return false;
     }
   }
   // Dont forget to return your whatever
   return S;
})(); // important!