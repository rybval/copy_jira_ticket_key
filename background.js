const keyRegex = RegExp('(selectedIssue=|net/browse/)([A-Z]+-[0-9]+)');

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  if (tab.url.match(RegExp('^https://jira.')) && tab.url.match(keyRegex)) {
    browser.pageAction.show(tab.id);
  }
});

browser.pageAction.onClicked.addListener(tab => {
  let ticketKey = tab.url.match(keyRegex)[2];
  navigator.clipboard.writeText(ticketKey);
});
