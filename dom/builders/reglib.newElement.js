/*
 Author:    Greg Reimer (reglib version 1.0.2)
 Blog:      http://blogs.sun.com/greimer
 Copyright: Copyright 2008
 License:   Released under MIT license 
 Source:    http://code.google.com/p/reglib/
 
 Description: 
 
    name: e.g. 'div', 'div.foo', 'div#bar', 'div.foo#bar', 'div#bar.foo'
    atts: (optional) e.g. {'href':'page.html','target':'_blank'}
    content: (optional) either a string, or an element, or an arry of strings or elements
     
 Example:
 (code)
 // example 1
   var myDiv = reglib.newElement('div', { id:'complex', className:'main' }, "hello this is my div!" );
 // example 2
   var title = "Hello World";
   var description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
   var myComplexDiv = reglib.newElement(
      'div#complex', 
      { id:'colegram', className:'main parent' }, 
         [
            reglib.newElement('h1.child', {}, title ),
            reglib.newElement('p.description', {}, description)
         ]
   );// end complex div
 (end)
*/

var reglib = (function() {
    var r = {
        newElement: function(name, atts, content) {
            if (name.indexOf('.') + name.indexOf('#') > -2) {
                var className = (name.indexOf('.') > -1) ? name.replace(/^.*\.([^\.#]*).*$/, "$1") : "";
                var id = (name.indexOf('#') > -1) ? name.replace(/^.*#([^\.#]*).*$/, "$1") : "";
                name = name.replace(/^([^\.#]*).*$/, '$1');
            }
            var e = document.createElement(name);
            if (className) {
                e.className = className;
            }
            if (id) {
                e.id = id;
            }
            if (atts) {
                for (var key in atts) {
                    // setAttribute() has shaky support, try direct methods first
                    if (!atts.hasOwnProperty(key)) {
                        continue;
                    }
                    if (key == 'class') {
                        e.className = atts[key];
                    }
                    else if (key == 'for') {
                        e.htmlFor = atts[key];
                    }
                    else if (key.indexOf('on') == 0) {
                        e[key] = atts[key];
                    }
                    else {
                        e.setAttribute(key, atts[key]);
                    }
                }
            }
            if (content) {
                if (! (content instanceof Array)) {
                    content = [content];
                }
                for (var a = 0; a < content.length; a++) {
                    if (typeof content[a] == 'string') {
                        e.appendChild(document.createTextNode(content[a]));
                    } else {
                        e.appendChild(content[a]);
                    }
                }
            }
            if (name.toLowerCase() == 'img' && !e.alt) {
                e.alt = '';
            }
            return e;
        }
    };
    return r;
})();
