// Toggle script to inject.
var toggleFeedEval = "$('ol.feed.updates').toggle()"; 

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
    document.getElementById('the-button').addEventListener('click', injectWithScript);
});
