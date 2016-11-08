// Scratchpad
// ==============================================================


// ==============================================================
// Working example
// http://stackoverflow.com/questions/13872542/chrome-chrome-storage-local-get-and-set

function save() {
    var channels = $("#channels").val();
    var keywords = $("#keywords").val();

    chrome.storage.local.set({'channels': channels});
    chrome.storage.local.set({'keywords': keywords});
}

function load() {
    var channels = "";
    var keywords = "";
    chrome.storage.local.get('channels', function (result) {
        var channels = result.channels;
        alert(result.channels);
        $("#channels").val(channels);
    });
} 

// "Chrome.storage.local.get() returns an object with items in their key-value mappings, so you have to use the index of the key in your search pattern."





// ==============================================================
var derp;
chrome.storage.local.set({"derp" : "B00p"});
chrome.storage.local.get("derp", function(data){
  derp = data;
});
console.log("what is derp: " + derp);






// ==============================================================
// Sample get/set usage
chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
    //  A data saved callback omg so fancy
});

chrome.storage.sync.get(// String or Array //["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
});






// ==============================================================
// Last good working copy before storage feature:

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


// ==============================================================
// Lessons learned

// If you try to retrieve a property from chrome.storage.local that isn't set, it won't return underfined. It will return the entire storage object, with all of the prototype methods. You have to check for that property ON the storage object, like result.prop instead of just prop.



