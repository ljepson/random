// ==UserScript==
// @name        Gmail No Ads
// @namespace   Gmail No Ads
// @include     http*://mail.google.com/*
// @version     1.5
// Thank you Lee @ http://userscripts.org/topics/86458
// Thank you Kitichai @ http://userscripts.org/scripts/show/135483
// Small additions to Kitichai's script
// ==/UserScript==

// Hiding right col altogether.
GM_addStyle(".Bu {display:none;}");
GM_addStyle(".Bu:first-child {display:block;}");
GM_addStyle(".Bu .hx {padding-right:0;}");

// Hiding bottom ads.
GM_addStyle(".nH .PS {display:none;}");

// Hiding web clips
GM_addStyle(".mq {display:none}");
GM_addStyle(".nH .UJ {border-top:0px solid #000000;}");

// Make the Message container full screen on hover and back to normal on blur.
// This works great with dual-pane Gmail and having your email list wider. 
GM_addStyle(".no .apN .ao8:hover {width:100.7% !important;overflow-y:scroll;position:absolute;top:1px;right:-10px;}");

// Increase auto-complete email address width.
GM_addStyle(".aiv {max-width:600px;width:80%;}");
GM_addStyle(".aq .am {max-width:100%;width:92%;}");
GM_addStyle(".ah .am {max-width:100%;width:92%;}");
