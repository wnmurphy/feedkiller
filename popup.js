// document.addEventListener('DOMContentLoaded', function(){
//     console.log('feedkiller.js loaded');
//     var toggleFeedEval = "$('ol.feed.updates').toggle()";
//     runMe(toggleFeedEval);
//   });

// Inject a script into tab window.
function runMe (evalThis) {
    //console.log('attempting to apply:  ' + evalThis);
    // alert('attempting to apply:  ' + evalThis);
    chrome.tabs.executeScript(null, {code:evalThis});
};

// Toggling script to inject.
var toggleFeedEval = "$('ol.feed.updates').toggle()"; 


// var derp = runMe(toggleFeedEval);

// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.getElementsByClassName('the-button');
//     divs[0].addEventListener('click', derp);
//   }
// });



//works!!
function runIt(){
    runMe(toggleFeedEval);
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('the-button').addEventListener('click', runIt);
    //document.getElementsByClassName('the-button')[0].addEventListener('click', runIt);
});

