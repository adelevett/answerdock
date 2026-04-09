/* options.js */
"use strict";

const preferSearchToggle = document.getElementById("preferSearchToggle");
const saveBtn = document.getElementById("saveBtn");
const statusMsg = document.getElementById("statusMsg");

const KEY_PREFER_SEARCH = "preferSearch";

chrome.storage.local.get(KEY_PREFER_SEARCH, (result) => {
  preferSearchToggle.checked = Boolean(result?.[KEY_PREFER_SEARCH]);
});

saveBtn.addEventListener("click", () => {
  const value = Boolean(preferSearchToggle.checked);
  chrome.storage.local.set({ [KEY_PREFER_SEARCH]: value }, () => {
    showStatus("Saved", "ok");
  });
});

function showStatus (msg, type) {
  statusMsg.textContent = msg;
  statusMsg.className = `status-msg ${type} show`;
  setTimeout(() => statusMsg.classList.remove("show"), 2200);
}
