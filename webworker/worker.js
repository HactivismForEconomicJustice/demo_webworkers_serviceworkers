// Listen for messages from main page w/ string for outgoing messages.
var task = 'Buy pretty things';
var r = self.addEventListener('message', function(e) {
  console.log('... worker got message ' + e.data);
  task = e.data;
}, false);

// Fibonacci numbers generator.  
// F(0) = 0, F(1) = 1, F(x) = (F(x-2) + F(x-1).
function F(x) { 
  if (x<2) return x;  return F(x-1) + F(x-2); 
}

// Send messages with Fibonacci numbers and task string
var i = 0;
setInterval(function() {
  self.postMessage(F(i++) + ' ' + task);
}, 500);

// Don't use while(true) {}, or message events won't be processed


// SIDEBAR:  You can import scripts.  Note it's not require() or import...
importScripts("//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.5/lodash.min.js");
console.log("SIDEBAR: importScripts", _);

// SIDEBAR:  You can make network requests
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) { 
      console.log("SIDEBAR: XMLHttpRequest for README.md");
      console.log(xhttp.responseText.slice(0, xhttp.responseText.indexOf("\n")) );
    }
};
xhttp.open("GET", "/README.md", true);
xhttp.send();

