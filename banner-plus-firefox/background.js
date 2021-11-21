const CRNs = [];
var preferences = {};

// Runs when initially installed
chrome.runtime.onInstalled.addListener(() => {
  preferences["switchToEnterCRNsTabCheckBox"] = false;
  preferences["addToSummaryCheckBox"] = false;
  preferences["submitCheckBox"] = false;
  preferences["conditionalAddAndDropCheckBox"] = false;

  chrome.storage.sync.set({ preferences });
  chrome.storage.sync.set({ CRNs });
  console.log('Quick Banner is Active');
});

// Create the options selection in the context menu for the B+ icon
browser.contextMenus.create({
  "title": "Options",
  "contexts": ["browser_action"],
  "onclick": openOptionsPage
});

function openOptionsPage() {
  var openingPage = browser.runtime.openOptionsPage()
}

// When the B+ icon is clicked, try inserting the CRNs
browser.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(
    tab.id, {
      file: "insertCRNs.js"
  });
  executing.then(onExecuted, onError);
});

