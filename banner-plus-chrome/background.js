const CRNs = [];
var preferences = {};

chrome.runtime.onInstalled.addListener(() => {
  preferences["switchToEnterCRNsTabCheckBox"] = false;
  preferences["addToSummaryCheckBox"] = true;
  preferences["submitCheckBox"] = false;
  preferences["conditionalAddAndDropCheckBox"] = false;

  //console.log("preferences", preferences)

  chrome.storage.sync.set({ preferences });
  chrome.storage.sync.set({ CRNs });
  console.log('Quick Banner is Active');
  //console.log(preferences["Add to Summary"])
});

// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['insertCRNs.js']
  });
});