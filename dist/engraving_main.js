parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KAv0":[function(require,module,exports) {
module.exports={"caligraphy-1":"Lucida Calligraphy Italic","fancy-script-2":"Edwardian","italic-3":"Zapfchan","block-4":"Times New Roman","script-5":"Amazone BT"};
},{}],"OpGN":[function(require,module,exports) {
"use strict";var e=t(require("../data/fonts.json"));function t(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){var t=document.getElementsByClassName("wc-pao-addon-field wc-pao-addon-checkbox")[0],n=document.getElementsByClassName("input-text wc-pao-addon-field wc-pao-addon-custom-text")[0],d=document.getElementsByClassName("wc-pao-addon-field wc-pao-addon-select")[0],a=document.getElementsByClassName("wc-pao-addon-container wc-pao-addon wc-pao-addon-engraving")[0],o=document.getElementsByClassName("wc-pao-addon-container wc-pao-addon wc-pao-addon-engraving-font")[0];a.setAttribute("hidden",!0),o.setAttribute("hidden",!0),t.onclick=function(){n.value="",etype.selectedIndex=0,a.toggleAttribute("hidden"),o.toggleAttribute("hidden")},d.onchange=function(){n.style.fontFamily="'"+e.default[etype.value]+"'"}});
},{"../data/fonts.json":"KAv0"}]},{},["OpGN"], null)