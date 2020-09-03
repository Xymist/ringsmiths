// @flow

import fonts from "../data/fonts.json";

document.addEventListener("DOMContentLoaded", function () {
  const engraving_option = document.getElementsByClassName(
    "wc-pao-addon-field wc-pao-addon-checkbox"
  )[0];
  const ipt = document.getElementsByClassName(
    "input-text wc-pao-addon-field wc-pao-addon-custom-text"
  )[0];
  const engraving_type = document.getElementsByClassName(
    "wc-pao-addon-field wc-pao-addon-select"
  )[0];
  const egv = document.getElementsByClassName(
    "wc-pao-addon-container wc-pao-addon wc-pao-addon-engraving"
  )[0];
  const eft = document.getElementsByClassName(
    "wc-pao-addon-container wc-pao-addon wc-pao-addon-engraving-font"
  )[0];

  /*::
    if (!(engraving_type instanceof HTMLSelectElement) || !(ipt instanceof HTMLInputElement)) {
      return;
    }
  */

  // Hide engraving options to start with
  egv.setAttribute("hidden", "true");
  eft.setAttribute("hidden", "true");

  engraving_option.onclick = () => {
    ipt.value = "";
    engraving_type.selectedIndex = 0;
    egv.toggleAttribute("hidden");
    eft.toggleAttribute("hidden");
  };

  engraving_type.onchange = () => {
    ipt.style.fontFamily = "'" + fonts[engraving_type.value] + "'";
  };
});
