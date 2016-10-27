// Scratchpad




var derp;
chrome.storage.local.set({"derp" : "B00p"});
chrome.storage.local.get("derp", function(data){
  derp = data;
});
console.log("what is derp: " + derp);







// Sample get/set usage
chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
    //  A data saved callback omg so fancy
});

chrome.storage.sync.get(// String or Array //["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
});





// Last good working copy before storage feature:
// Toggle script to inject.
var toggleFeedEval = "$('ol.feed.updates').toggle()";

// Inject the script into tab window.
function inject (evalThis) {
    chrome.tabs.executeScript(null, {code:evalThis});
};

function injectWithScript () {
    inject(toggleFeedEval);
};

// After DOM content loads, add an event listener to the button in popup.html.
// Bind button to toggle behavior.
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('the-button').addEventListener('click', injectWithScript);
});





