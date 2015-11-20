// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=> {
    if (!changeInfo.url.match('')) return;

    if (changeInfo.status != "complete") return;

    chrome.tabs.executeScript(tabId, {file: "injector.js"});
})