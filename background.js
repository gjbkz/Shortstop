const commands = (typeof chrome !== "undefined" && chrome.commands) ||
                 (typeof browser !== "undefined" && browser.commands);
if (commands?.onCommand) {
  commands.onCommand.addListener((command) => console.log({command}));
} else {
  throw new Error("Commands API is not supported in this browser.");
}
