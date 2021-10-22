chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status != 'complete')
    return;
  if (tab.title.includes('Jupyter Notebook')) {
    chrome.tabs.update(tab.id, {autoDiscardable: false});
  };
});

chrome.runtime.onInstalled.addListener(function(details) {
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
      if (tab.title.includes('Jupyter Notebook')) {
        chrome.tabs.update(tab.id, {autoDiscardable: false});
      };
    });
  });
});
