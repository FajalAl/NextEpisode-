// Function to find and click the 'Next Episode' link or button.
function clickNextEpisode() {
    // Look for links or buttons containing 'ep', 'episode', or similar terms.
    const nextEpisodeButton = Array.from(document.querySelectorAll('a, button, div'))
      .find(el => {
        const text = el.textContent.toLowerCase();
        return /next.*(ep|episode)/.test(text) || /(ep|episode).*next/.test(text);
      });
  
    if (nextEpisodeButton) {
      console.log("Next episode found! Redirecting...");
      nextEpisodeButton.click();
    } else {
      console.log("No next episode link or button found.");
    }
  }
  
  // Monitor the video element to detect when it ends.
  function monitorVideo() {
    const video = document.querySelector("video");
  
    if (video) {
      video.addEventListener("ended", () => {
        console.log("Video ended. Attempting to play next episode...");
        clickNextEpisode();
      });
    } else {
      console.log("No video element found.");
    }
  }
  
  // Run the monitor function once the content loads.
  window.addEventListener("load", monitorVideo);
  