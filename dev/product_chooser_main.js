// @flow

import fields from "../data/fields.json";
import titleCase from "../src/utils/title_case.js";
import _ from "../styles/product_chooser.css";

let selections = {};

const getImageSrc = (elem) => {
  // Find the appropriate content in the appropriate map for this element
  const elem_details = fields[elem.id];

  if (!elem_details) {
    return;
  }

  // Fetch the field to update and the value to set it to
  const affected_field = elem_details["field"];

  // Use the image which considers the rest of the current selection,
  // with the value which this option would set overridden.
  let selected = [
    affected_field === "style"
      ? elem_details.value
      : fields[selections.style]?.value || "court",
    affected_field === "metal"
      ? elem_details.value
      : fields[selections.metal]?.value || "yellow-gold",
    affected_field === "width"
      ? elem_details.value
      : fields[selections.width]?.value || "4mm",
  ];

  return imageUrl(selected.join("-"));
};

// For a given element, fetch its child image and update the src attribute
const updateImageSrc = (elem) => {
  const elem_image = document.getElementById(elem.id + "-image");
  const img_src = getImageSrc(elem);

  // Some things, such as the carat, don't have mutable images.
  // For those, img_src will be blank, so the relevant image
  // will not be updated.
  if (elem_image && img_src) {
    /*::
      if (!(elem_image instanceof HTMLImageElement)) {
        throw new Error('target element image was not found');
      }
    */
    elem_image.src = img_src;
    elem_image.srcset = "";
  }
};

const setSpecImage = (metal, style, width) => {
  const target = document.getElementById("spec-image");
  let selected = [style || "court", metal || "yellow-gold", width || "4mm"];

  /*::
  if (!(target instanceof HTMLImageElement)) {
    throw new Error('target spec-image was not found');
  }
  */

  target.src = imageUrl(selected.join("-"));
  target.srcset = "";
};

const imageUrl = (key) => {
  return "/wp-content/uploads/2020/08/" + key + ".jpg";
};

const updateSpec = () => {
  const carat = fields[selections.carat]?.value;
  const metal = fields[selections.metal]?.value;
  const style = fields[selections.style]?.value;
  const width = fields[selections.width]?.value;

  if (!(metal && style && width)) {
    return;
  }

  setSpecImage(metal, style, width);
};

// Entrypoint for the product chooser logic
document.addEventListener("DOMContentLoaded", function() {
  [...document.getElementsByClassName("ring-attribute-selector")].forEach(
    (selector) => {
      selector.onclick = () => {
        updateSpec();
      };
    }
  );
});
