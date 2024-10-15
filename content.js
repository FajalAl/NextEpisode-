// Function to click the "Next Episode" button/link when available.
function clickNextEpisode() {
    try {
      // Look for elements that might indicate the next episode link.
      const nextEpisodeButton = Array.from(document.querySelectorAll('a, button, div, span'))
        .find(el => {
          const text = el.textContent.trim().toLowerCase();
          const href = el.getAttribute('href') || ''; // Check if href exists.
  
          // Match text or href containing 'next', 'ep', 'episode', or a '>' symbol.
          return /next|ep|episode|>/.test(text) || /next|ep|episode/.test(href);
        });
  
      if (nextEpisodeButton) {
        console.log('Next episode found! Redirecting...');
        nextEpisodeButton.click();
      } else {
        console.log('No next episode link found.');
      }
    } catch (error) {
      console.error('Error in clickNextEpisode:', error);
    }
  }
  
  // Function to monitor the video element for when it ends.
  function monitorVideo() {
    try {
      const video = document.querySelector('video');
  
      if (video) {
        video.addEventListener('ended', () => {
          console.log('Video ended. Attempting to play next episode...');
          clickNextEpisode();
        });
      } else {
        console.log('No video element found.');
      }
    } catch (error) {
      console.error('Error in monitorVideo:', error);
    }
  }
  
  // Function to check for blocked resources or CORS issues.
  function checkBlockedResources() {
    window.addEventListener('error', (event) => {
      if (event.message.includes('ERR_BLOCKED_BY_CLIENT')) {
        console.warn('A resource was blocked by an extension or browser setting.');
      } else if (event.message.includes('CORS')) {
        console.warn('CORS policy blocked a request. Check server configurations.');
      }
    });
  }
  
  // Run necessary functions once the page loads.
  window.addEventListener('load', () => {
    monitorVideo();
    checkBlockedResources();
  });
  