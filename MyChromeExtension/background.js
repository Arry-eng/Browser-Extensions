'use strict';

console.log('Hello world from My ChromeExtension');
//console.log("Hello World! from MyChromeExtensioin")

chrome.runtime.onInstalled.addListener(() => {
    console.log("My Chrome Extension installed");
    }
);
