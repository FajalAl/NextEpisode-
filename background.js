// Set default preferences when the extension is installed.
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
      skipIntro: true,
      skipRecap: true,
      skipNext: true
    });
    console.log("Default settings applied: Skip Intro, Recap, and Next enabled.");
  });
  
  // Set an uninstall URL to redirect users to a feedback form upon uninstallation.
  if (chrome.runtime) {
    chrome.runtime.setUninstallURL(
      "https://docs.google.com/forms/d/e/1FAIpQLSdu75DIgQwiEYud7I8TgsAkyoUnFyLXRDAnELcN_QIeLGvh5w/viewform",
      () => console.log("Uninstall URL set successfully.")
    );
  }
  