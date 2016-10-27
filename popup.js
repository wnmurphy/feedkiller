// Toggle script to inject.
var toggleFeedEval = "$('ol.feed.updates').toggle()"; 
var toggledOff = chrome.storage === undefined ?  false : chrome.storage.sync.get('toggledOff', null);

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
    document.getElementById('the-button').addEventListener('click', function(){
      // Toggle
      injectWithScript();
      //Save state 
      chrome.storage.sync.set({'toggledOff': !toggledOff}, function() {
       console.log('Settings saved');
      });
    });
});


// // Toggle script to inject.
// var toggleFeedEval = "$('ol.feed.updates').toggle()"; 

// // Inject the script into tab window.
// function inject (evalThis) {
//     chrome.tabs.executeScript(null, {code:evalThis});
// };

// function injectWithScript () {
//     inject(toggleFeedEval);
// };

// // After DOM content loads, add an event listener to the button in popup.html.
// // Bind button to toggle behavior.
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('the-button').addEventListener('click', injectWithScript);
// });