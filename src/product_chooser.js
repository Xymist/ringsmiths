import fields from '../data/fields.json';
import titleCase from './title_case.js';
import deselectSiblings from './siblings.js';
import '../styles/product_chooser.css';

// Object representing the current state of selections
// the user has made
let selections = defaultSelections();

const defaultSelections = () => {
  return {
    ring_type: "ring-plain",
    carat: null,
    width: null,
    metal: null,
    style: null,
  };
};

const field_pfx = Object.keys(fields).reduce((tally, field_name) => {
  let field_id = field_name.split("-")[0];
  tally[field_id] = (tally[field_id] || 0) + 1;
  return tally;
}, {});

const assembleUrl = () => {
  // Fetch the pieces we want from the selections object; anything we don't want
  // will be null or undefined, and will be removed by the filter
  let arr = [
    fields[selections.carat]?.value,
    fields[selections.width]?.value,
    fields[selections.metal]?.value,
    fields[selections.style]?.value,
    "wedding-ring",
  ].filter(Boolean)

  // Construct the URL by joining the components
  url = arr.join("-")
};

const setHiddenOptions = () => {
  let selected = [
    selections.carat,
    selections.width,
    selections.style,
    selections.metal
  ].filter(Boolean);
  let excluded = []

  // Push all excluded element ID sets
  selected.forEach((entry) => { excluded.push(fields[entry]["excl_fields"]) })

  // Deduplicate
  excluded = new Set(excluded.flat().filter(Boolean));
  excluded = [...excluded];

  // Get the names of all the option fields
  const available_fields = Object.keys(fields);

  // Hide anything to exclude, reveal anything otherwise
  available_fields.forEach((field_id) => {
    let elem = document.getElementById(field_id);
    if (elem) {
      elem.hidden = excluded.includes(field_id);
    };
  });

  const excluded_pfx = excluded.reduce((tally, field_name) => {
    let field_id = field_name.split("-")[0];
    tally[field_id] = (tally[field_id] || 0) + 1;
    return tally;
  }, {});

  Object.keys(selections).forEach((pfx) => {
    let section = document.getElementById(pfx + '-option-section');
    if (section) {
      section.hidden = (excluded_pfx[pfx] === field_pfx[pfx]);
    }
  });
};

const updateUrlData = (elem) => {
  // Find the appropriate content in the appropriate map for this element
  const elem_details = fields[elem.id]

  // Fetch the field to update and the value to set it to
  const affected_field = elem_details["field"];

  // Set attributes of selections object
  if (selections[affected_field] === elem.id) {
    selections[affected_field] = null;

    // We don't need to un-null any other fields, since by deselecting an element
    // we're always increasing the options available.
  } else {
    selections[affected_field] = elem.id;

    // Erase attributes that are impossible (e.g. carat)
    if (elem_details.excl_attrs !== undefined) {
      Object.keys(selections).forEach((attrib) => {
        const excl = elem_details.excl_fields

        // If there are excl_attrs for this attribute, and the current selection for this attribute
        // is in those excl_attrs, null that selection so it won't be included in the URL
        if (excl !== undefined && excl.includes(selections[attrib])) {
          selections[attrib] = null
        }
      });
    }
  };

  setHiddenOptions();
  assembleUrl();
  setFinaliseUrl();
};

const validUrl = () => {
  let res = true;

  Object.keys(selections).forEach((key) => {
    let associated_section = document.getElementById(key + '-option-section');
    // If the key is null but the section is not hidden,
    // we're missing an attribute
    if (!selections[key] && associated_section && !associated_section.hidden) {
      res = false
    };
  });

  return res
};

// The "finalise" button takes the user to the relevant product page
const setFinaliseUrl = () => {
  let btn = document.getElementById('finalise_ring');

  if (validUrl()) {
    btn.href = "/product/" + url;
  } else {
    btn.href = "#";
  };
};

const getImageSrc = (elem) => {
  // Find the appropriate content in the appropriate map for this element
  const elem_details = fields[elem.id];

  if (elem_details === undefined) {
    return
  }

  // Fetch the field to update and the value to set it to
  const affected_field = elem_details["field"];

  // Use the image which considers the rest of the current selection,
  // with the value which this option would set overridden.
  let selected = [
    affected_field === "style" ? elem_details.value : (fields[selections.style]?.value || "court"),
    affected_field === "metal" ? elem_details.value : (fields[selections.metal]?.value || "yellow-gold"),
    affected_field === "width" ? elem_details.value : (fields[selections.width]?.value || "4mm")
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
    elem_image.src = img_src;
    elem_image.srcset = "";
  }
};

// Get all attribute selectors, find their images and update
// them to use the latest selections or defaults.
const updateImages = () => {
  [...document.getElementsByClassName('ring-attribute-selector')].forEach((selector) => {
    updateImageSrc(selector);
  })
};

const skipToNextSection = (event) => {
  // Do nothing if no selection has been made
  if ([null, undefined].includes(selections[event.target.id.split("-")[0]])) {
    return
  };

  // Hide this section.
  const current_section = event.target.closest(".et_pb_section")
  current_section.style.display = "none";

  // Open the next valid (i.e. not hidden) section.
  let next_section = current_section.nextElementSibling
  while (next_section.hidden) {
    next_section = next_section.nextElementSibling
  };
  next_section.style.display = "block";
};

const initialHide = () => {
  let sects = Object.keys(selections);
  sects.push("spec");
  sects.forEach((pfx) => {
    let section = document.getElementById(pfx + '-option-section');
    if ([null, undefined].includes(section)) {
      return
    }

    section.style.display = (pfx === "metal") ? "block" : "none";
  });
};

const setSpecText = (carat, metal, style, width) => {
  const target = document.getElementById('spec-text');
  target.innerHTML = `Your chosen ring is a ${carat ? carat + ' ' : ''}${titleCase(metal)} ${titleCase(style)} wedding ring with a finger width of ${width}.`
}

const setSpecImage = (metal, style, width) => {
  const target = document.getElementById('spec-image');
  let selected = [
    style || "court",
    metal || "yellow-gold",
    width || "4mm"
  ];

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

  setSpecText(carat, metal, style, width);
  setSpecImage(metal, style, width);
};

const resetChooser = () => {
  selections = defaultSelections();
  initialHide();
  setHiddenOptions();
  assembleUrl();
};

const setSelected = (elem) => {
  elem.classList.add('selectedOption');
  deselectSiblings(elem);
};

// Initially, the URL is invalid and so we just link to '#'.
let url = '#';

// Entrypoint for the product chooser logic
document.addEventListener("DOMContentLoaded", function () {
  [...document.getElementsByClassName('ring-attribute-selector')].forEach((selector) => {
    selector.onclick = () => {
      setSelected(selector);
      updateUrlData(selector);
      updateImages();
      updateSpec();
    }
  });

  [...document.getElementsByClassName('next-button')].forEach((btn) => {
    btn.onclick = (event) => {
      event.preventDefault();
      skipToNextSection(event);
    };
  });

  [...document.getElementsByClassName('reset-button')].forEach((btn) => {
    btn.onclick = (event) => {
      event.preventDefault();
      resetChooser();
    };
  });

  resetChooser();
});
