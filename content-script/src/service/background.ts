// src/background.ts

chrome.runtime.onInstalled.addListener(() => {
 // 打开新窗口
 // chrome.tabs.create({
 //  url: 'https://baidu.com/1'
 // })
});

chrome.cookies.getAll({ domain: 'id.seewo.com' }, (cookies) => {
 console.log('cookies: ', cookies);
})

const cookie = {
 url: "https://baidu.com",
 name: "your_cookie_name",
 value: "your_cookie_value",
 expirationDate: (new Date().getTime() / 1000) + 3600 // 1 hour from now
};

chrome.cookies.set(cookie, (cookie) => {
 if (chrome.runtime.lastError) {
   console.error(chrome.runtime.lastError);
 } else {
   console.log("Cookie set: ", cookie);
 }
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
 if (changeInfo.status === 'complete' && tab.url) {
   console.log(`Tab updated: ${tab.url}`);
 }
});

// 点击插件图标，新开一个内部页面
chrome.action.onClicked.addListener((tab) => {
 console.log('Action clicked', tab);
  chrome.tabs.create({
   url: '../../index.html'
  })
})
