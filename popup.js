// Toggle script to inject.
var toggleFeedEval = "$('ol.feed.updates').toggle()";
var globalToggledOff;


// Set initial state of the toggle tracker.
chrome.storage.sync.get("toggledOff", function(result){
  // If the flag's never been initialized, initialize it.
  if(result.toggledOff === undefined){
    chrome.storage.sync.set({"toggledOff" : null});    
  }
});


// Inject the script into tab window.
function inject (evalThis) {
    chrome.tabs.executeScript(null, {code:evalThis});

    // chrome.storage.sync.get("toggledOff", function(data){
    //   toggledOff = data.toggledOff;
    // });
    console.log("globalToggledOff var in inject is:");
    console.log(globalToggledOff);
};


function injectTheScript () {
    inject(toggleFeedEval);
};


function elementIsHiddenOnPage () {
  if ( $('ol.feed.updates').css('display') === "none") {
    return true;
  }
  return false;
}

// After DOM content loads, add an event listener to the button in popup.html.
// Bind button to toggle behavior.
document.addEventListener('DOMContentLoaded', function () {

    // Let's see what's getting set in storage.
    chrome.storage.sync.get("toggledOff", function(result){
      console.log("Getter gets:");
      console.log(result.toggledOff);
    });

    document.getElementById('the-button').addEventListener('click', function(){

      // Inject toggling script to browser tab.
      injectTheScript();

      // Flip value of flag in both storage and global variable.
      chrome.storage.sync.set({"toggledOff" : !globalToggledOff}, function(){
        globalToggledOff = !globalToggledOff;
      });

      console.log("globalToggledOff var on click is:");
      console.log(globalToggledOff);
    });
});