// document.addEventListener('DOMContentLoaded', function(){
//     console.log('feedkiller.js loaded');
//     var toggleFeedEval = "$('ol.feed.updates').toggle()";
//     runMe(toggleFeedEval);
//   });

// Inject a script into tab window.
function runMe (evalThis) {
   alert('attempting to apply:  ' + evalThis);
   chrome.tabs.executeScript(null, {code:evalThis});
};

// Toggling script to inject.
var toggleFeedEval = "$('ol.feed.updates').toggle()"; 


var derp = runMe(toggleFeedEval);

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.getElementsByClassName('the-button');
    divs[0].addEventListener('click', derp);
  }
});
