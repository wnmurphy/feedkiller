// This should persist in the backgroun and only run once on browser load, instead of every time the popup.html window is opened.

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