// Whenever checkbox is toggled, send message to feedkiller.js
$(document).ready(function(){

  // Whenever the checkbox changes, send a toggle event to the content script:
  // $('#checkbox').change(function(){
  //   alert('checkbox changed');
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, {toggleFeed: true}, function(response) {
  //       console.log('response from feedkiller.js:', response)
  //     });
  //   });
  // });
});