document.getElementById('saveSettings').addEventListener('click', () => {
    const skipIntro = document.getElementById('skipIntro').checked;
    const skipRecap = document.getElementById('skipRecap').checked;
    const skipNext = document.getElementById('skipNext').checked;
  
    chrome.storage.local.set({ skipIntro, skipRecap, skipNext }, () => {
      alert('Settings saved!');
    });
  });
  
  // Load the current settings on popup open.
  document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['skipIntro', 'skipRecap', 'skipNext'], (settings) => {
      document.getElementById('skipIntro').checked = settings.skipIntro || false;
      document.getElementById('skipRecap').checked = settings.skipRecap || false;
      document.getElementById('skipNext').checked = settings.skipNext || false;
    });
  });
  