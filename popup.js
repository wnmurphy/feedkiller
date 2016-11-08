// The toggling script we want to inject when user clicks.
var toggleFeedEval = "$('ol.feed.updates').toggle()";


// Inject a script into tab window.
function inject (evalThis) {
    chrome.tabs.executeScript(null, {code:evalThis});
};


// Inject our particular script.
function injectTheScript () {
    inject(toggleFeedEval);
};

// Tell us whether the feed element we want to hide is currently hidden on the page.
function elementIsHiddenOnPage () {
  if ( $('ol.feed.updates').css('display') === "none") {
    return true;
  }
  return false;
};


// After DOM content loads, add an event listener for the button in popup.html and toggle behavior to button.
document.addEventListener('DOMContentLoaded', function () {

    // Let's see what's getting set in storage.
    chrome.storage.sync.get("toggledOff", function(result){
      console.log("Getter gets:");
      console.log(result.toggledOff);
    });

    document.getElementById('the-button').addEventListener('click', function(){

      // Inject toggling script to browser tab.
      injectTheScript();

      // Flip value of the flag in storage.
      chrome.storage.sync.set({"toggledOff" : !elementIsHiddenOnPage});

      // Log out what's in storage to verify click updated storage correctly.
      chrome.storage.sync.get("toggledOff", function(result){
        console.log("Getter gets:");
        console.log(result.toggledOff);
      });
    });
});
