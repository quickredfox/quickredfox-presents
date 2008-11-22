/*comment
 Author:     Lee Carmichael lecar_red@yahoo.com
 Copyright: Copyright (c) 2005 Lee Carmichael. All rights reserved.
 License:   Artistic License
 Source:    http://www.openjsan.org
 
 Description: 
 
    File.Basename - A library that provides unix-like tools 'dirname' and 'basename'
    Grabbed from JSAN, modified to fit within this collection's guidelines.
     
 Example:
 (code)
   File.basename('/javascripts/bin.js',2) // => bin.js
   File.dirname('/javascripts/bin.js',2) // => /javascripts
   File.path('/javascripts/bin.js',1) // => /javascripts/bin.js
   File.platform('/javascripts/bin.js',2) // => 2
   File.platformString('/javascripts/bin.js',2) // => Macintosh
   File.platformString('/javascripts/bin.js',1) // => Windows
   File.platformString('/javascripts/bin.js',2) // => Macintosh
   File.platformString('/javascripts/bin.js',3) // => UNIX
   File.platformString('/javascripts/bin.js',4) // => undefined
   
 (end)
end*/

var File = (function(){
   var TEMP={};
   // it would be nice to turn this into a class
   function _chop(str) {
   	// if not defined return empty string
   	if (!str) 
   		return "";

   	// remove last character from string
   	return str.substr(0, (str.length-1));
   }
   var File = {
      CONSTANTS: {
         WIN: 1,
         MAC: 2,
         UNIX: 3,
         platformStrs: new Array("N/A", "Windows", "Macintosh", "UNIX")
      },
      
      analyze_path: function(path, platform){
      	// should we error here? or just return?         
         if(!path) return;
         // setup the path
      	TEMP._path = path;
      	// need to check this value
      	// grab passed platform
      	if (platform) TEMP._platform = platform;
      	// figure out client type
      	if (typeof(TEMP._platform) == "undefined") {
      		// need to check for navigator and platform
      		// just in case if not in browser env...
      		if (navigator.platform.indexOf("Win") >= 0) {
      			TEMP._platform = File.CONSTANTS.WIN;
      		} else if (navigator.platform.indexOf("Mac") >= 0) {
      			TEMP._platform = File.CONSTANTS.MAC;
      		} else {
      			TEMP._platform = File.CONSTANTS.UNIX;
      		}
      	};
      	// set path pattern (current for Win we leave the <Drive Letter>)
      	if (TEMP._platform == File.CONSTANTS.WIN) 
      		TEMP._pattern = /^(.*\\)?(.*)/; // this will not match drive letter...
      	else 
      		TEMP._pattern = /^(.*\/)?(.*)/;

      	// match string
      	var rc = TEMP._path.match(TEMP._pattern);

      	// should we check values here?
      	// * skip rc[0] since it returns our string *

      	// setup basename
      	TEMP._basename = rc[2];
      	
      	if (!TEMP._basename) TEMP._basename = "";

      	// setup dirname
      	// and remove trailing slash
      	TEMP._dirname  = _chop(rc[1]);

      	return {
      	   basename: TEMP._basename,
      	   dirname: TEMP._dirname,
      	   path: TEMP._path,
      	   platform: TEMP._platform,
      	   platformString: File.CONSTANTS.platformStrs[TEMP._platform]
      	};
      },
      basename: function(path, platform){
         return File.analyze_path(path, platform).basename
      },
      dirname: function(path, platform){
         return File.analyze_path(path, platform).dirname
      },
      path: function(path, platform){
         return File.analyze_path(path, platform).path
      },
      platform: function(path, platform){
         return File.analyze_path(path, platform).platform
      },
      platformString: function(path, platform) {
      	return File.analyze_path(path, platform).platformString
      }
      
      
   }   
   return File;
})()
// File.Basename -