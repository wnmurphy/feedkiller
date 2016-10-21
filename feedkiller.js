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
var cond1, 
    cond2, 
    cond3, 
    cond4, 
    toggleFeedEval = "$('ol.feed.updates').toggle()"; 

// $('#popupCheckbox').click(function(){
var clickDetector = function () {
  console.log('click detected');
  // Hidebox is checked
  cond1 = $('#popupCheckbox').is(':checked');
  // Feed is visible
  cond2 = $('ol.feed.updates').css('display') !== 'none';
  // Hidebox is not checked
  cond3 = !$('#popupCheckbox').is(':checked');
  // Feed is hidden
  cond4 = $('ol.feed.updates').css('display') === 'none';

  // If hidebox is checked AND feed is displayed OR If hidebox is unchecked AND feed is hidden
  if ((cond1 && cond2) || (cond3 && cond4)){
    console.log('conditions triggered');
    runMe(toggleFeedEval);
  } 
};