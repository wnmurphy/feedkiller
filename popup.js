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


// Set the initial state of the toggle tracker if it hasn't been set yet, otherwise update page with stored toggle setting if it has.
chrome.storage.sync.get("toggledOff", function(result){

  // If the flag's never been initialized, initialize it.
  if(result.toggledOff === undefined){
    chrome.storage.sync.set({"toggledOff" : null});    
  
  // If the element should be toggledOff and it's not already hidden, hide it by toggling.
  } else if (result.toggledOff === true && !elementIsHiddenOnPage) {
    injectTheScript();

  // If the element should not be toggledOff but it is already hidden, unhide it by toggling.
  } else if (result.toggledOff === false && elementIsHiddenOnPage) {
    injectTheScript();
  }

});


// After DOM content loads, add an event listener for the button in popup.html and bind button to toggle behavior.
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
      chrome.storage.sync.set({"toggledOff" : !elementIsHiddenOnPage});

      console.log("globalToggledOff var on click is:");
    });
});
