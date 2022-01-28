let x4btn = document.getElementById("4x");
x4btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: speed4x,
  });
});

function speed4x() {
  console.log("4X");
  document.getElementsByTagName("video")[0].playbackRate = 4;
}

let x2btn = document.getElementById("2.375X");
x2btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: speed2x,
  });
});

function speed2x() {
  console.log("2X");
  document.getElementsByTagName("video")[0].playbackRate = 2.375;
}
