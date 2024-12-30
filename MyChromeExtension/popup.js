//console.log("Hello World! from My ChromeExtension - popup.js")

document.getElementById("changeColorBtn").addEventListener("click", () => {
    console.log("Hello World! from My ChromeExtension - popup.js")
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'document.body.style.backgroundColor = "lightblue";'
        });
    });
});
