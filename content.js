const INTRO_UIA = "player-skip-intro";
const RECAP_UIA = "player-skip-recap";
const NEXT_UIA = "next-episode-seamless-button";
const NEXT_DRAIN_UIA = "next-episode-seamless-button-draining";

const BUTTONS = [INTRO_UIA, RECAP_UIA, NEXT_UIA, NEXT_DRAIN_UIA];

// Function to click buttons like "Skip Intro", "Skip Recap", and "Next Episode".
async function skipper() {
  try {
    // Fetch stored preferences (e.g., whether to skip intro, recap, or next episode).
    chrome.storage.local.get(["skipIntro", "skipRecap", "skipNext"], (settings) => {
      const mapper = {
        [INTRO_UIA]: settings.skipIntro,
        [RECAP_UIA]: settings.skipRecap,
        [NEXT_UIA]: settings.skipNext,
        [NEXT_DRAIN_UIA]: settings.skipNext,
      };

      BUTTONS.forEach((uia) => {
        const button = Array.from(document.getElementsByTagName("button"))
          .find(elem => elem.getAttribute("data-uia") === uia);

        if (button && mapper[uia]) {
          console.log(`Clicking button: ${uia}`);
          button.click();
        }
      });
    });
  } catch (error) {
    console.error('Error in skipper function:', error);
  }
}

// Ensure the script only runs on Netflix.
if (document.location.host.includes(".netflix.")) {
  // Run the skipper function every 500ms to detect and click buttons.
  setInterval(skipper, 500);
}
