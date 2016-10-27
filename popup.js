// Toggle script to inject.
var toggleFeedEval = "$('ol.feed.updates').toggle()";

var globalToggledOff;

chrome.storage.local.set({"toggledOff" : false}, function(){
  globalToggledOff = false;
});
console.log("globalToggledOff var in global, after initial set, is:");
console.log(globalToggledOff);

// var toggledOff = chrome.storage === undefined ?  false : chrome.storage.sync.get('toggledOff', null);

// Inject the script into tab window.
function inject (evalThis) {
    chrome.tabs.executeScript(null, {code:evalThis});

    // chrome.storage.local.get("toggledOff", function(data){
    //   toggledOff = data.toggledOff;
    // });
    console.log("globalToggledOff var in inject is:");
    console.log(globalToggledOff);
};

function injectWithScript () {
    inject(toggleFeedEval);
};

// After DOM content loads, add an event listener to the button in popup.html.
// Bind button to toggle behavior.
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('the-button').addEventListener('click', function(){

      // Inject toggling script to browser tab.
      injectWithScript();

      // Flip value of flag in both storage and global variable.
      chrome.storage.local.set({"toggledOff" : !globalToggledOff}, function(){
        globalToggledOff = !globalToggledOff;
      });

      console.log("globalToggledOff var on click is:");
      console.log(globalToggledOff);
    });
});