/*
 Author:    Peter-Paul Koch 
 Blog:      http://www.quirksmode.org
 Copyright: Copyright 2008 (but free to use under no restrictions)
 Source:    http://www.quirksmode.org/js/xmlhttp.html

 Description: 

    This is the XMLHttpRequest functions originally included in the book
    "PPK on Javascript" by  Peter-Paul Koch. They have been modified
    to serve along this compendium's guidelines.

 Example:
 (code)

   function handleRequest(req) {
 	   var writeroot = [some element];
 	   writeroot.innerHTML = req.responseText;
   }

   PPK.sendRequest('file.txt',handleRequest);

 (end)
*/

var PPK = (function() {
    var PPK = {
        XMLHttpFactories: [
        function() {
            return new XMLHttpRequest()
        },
        function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
        },
        function() {
            return new ActiveXObject("Msxml3.XMLHTTP")
        },
        function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        ],
        sendRequest: function(url, callback, postData) {
            var req = PPK.createXMLHTTPObject();
            if (!req) return;
            var method = (postData) ? "POST": "GET";
            req.open(method, url, true);
            req.setRequestHeader('User-Agent', 'XMLHTTP/1.0');
            if (postData)
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.onreadystatechange = function() {
                if (req.readyState != 4) return;
                if (req.status != 200 && req.status != 304) {
                    //	 alert('HTTP error ' + req.status);
                    return;
                }
                callback(req);
            }
            if (req.readyState == 4) return;
            req.send(postData);
        },
        createXMLHTTPObject: function() {
            var xmlhttp = false;
            for (var i = 0; i < PPK.XMLHttpFactories.length; i++) {
                try {
                    xmlhttp = PPK.XMLHttpFactories[i]();
                }
                catch(e) {
                    continue;
                }
                break;
            }
            return xmlhttp;
        }
    };
    return PPK;
})();

