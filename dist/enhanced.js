/*! enhanced-js v1.0.4 | (c) Niklas Engblom | MIT License */
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,n){if(n=n||u,/^(#?[\w-]+|\.[\w-.]+)$/.test(t))switch(t.charAt(0)){case"#":return e([n.getElementById(t.substr(1))]);case".":var r=t.substr(1).replace(/\./g," ");return e(n.getElementsByClassName(r));default:return e(n.getElementsByTagName(t))}return e(n.querySelectorAll(t))}function e(t){for(var e=[],r=0,o=t.length;r<o;r++)e[r]=t[r];return n(e)}function n(t){return t.addClass=function(t){var e=this;if(!this.length||!t)return this;t.split(" ").forEach(function(t){return r(e,t)})},t.removeClass=function(t){var e=this;if(!this.length||!t)return this;t.split(" ").forEach(function(t){return o(e,t)})},t.hasClass=function(t){if(!this.length||!t)return!1;for(var e=0,n=this.length;e<n;e++)if(!this[e].classList.contains(t))return!1;return!0},t.first=function(){return n([this[0]])},t.last=function(){return n([this[this.length-1]])},t}function r(t,e){for(var n=0,r=t.length;n<r;n++)t[n].classList.add(e)}function o(t,e){for(var n=0,r=t.length;n<r;n++)t[n].classList.remove(e)}function i(t){if("string"==typeof t)return u.createElement(t);if(t instanceof Element||t instanceof Node)return t;if("object"!=(void 0===t?"undefined":_typeof(t)))throw Error("e.create | given value must be a string, DOM element or an object.");var e=u.createElement(t.tag),n=t.events;if(t.content&&(e.innerHTML=t.content),n)for(var r=0,o=n.length;r<o;r++){var s=n[r];e.addEventListener(s.type,s.listener)}var a=t.children;for(var f in t)"children"!=f&&"tag"!=f&&"content"!=f&&"events"!=f&&e.setAttribute(f,t[f]);if(a)for(var c=0,l=a.length;c<l;c++)e.appendChild(i(a[c]));return e}function s(t){return new Promise(function(e,n){"string"==typeof t&&(t={url:t});var r=t.type;t=Object.assign({method:"GET"},t);var o=t.headers||{},i=new XMLHttpRequest;if(i.onerror=function(){n([i.status,i])},i.onreadystatechange=function(){if(4==i.readyState){var t=i.status;if(t>=200&&t<=300){var r="application/json"!=o.Accept?i.responseText:JSON.parse(i.responseText);return e(r)}n([t,i])}},i.open(t.method,t.url,!0),o)for(var s in o)i.setRequestHeader(s,o[s]);var a=t.data,u=void 0;a&&("json"==r&&"string"!=typeof a?(u=JSON.stringify(a),i.setRequestHeader("Content-Type","application/json")):u=Object.keys(a).map(function(t){return t+"="+encodeURIComponent(a[t])}).join("&")),i.send(u)})}var a=function(e,n){return e?t(e,n):"v1.0.4"};a.single=function(e,n){return t(e,n).first()},"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=a:window.e=a;var u=document;a.domReady=function(t){if("complete"===u.readyState||"loaded"===u.readyState||"interactive"===u.readyState)return void t();u.addEventListener("DOMContentLoaded",function(e){t()})},a.create=i,a.ajax=s,a.get=function(t){return s(t)},a.post=function(t,e,n){return s(Object.assign({url:t,data:e,method:"POST"},n))}}();