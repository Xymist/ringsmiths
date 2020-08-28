const fields = {
  "ring-plain": {
    field: "ring_type",
    value: "plain-shaped"
  },
  "ring-diamond": {
    field: "ring_type",
    value: "gem-set"
  },
  "carat-9": {
    field: "carat",
    value: "9ct",
    excl_attrs: {
      "metal": ["titanium", "platinum"]
    },
    excl_fields: [
      "metal-titanium", "metal-platinum"
    ]
  },
  "carat-18": {
    field: "carat",
    value: "18ct",
    excl_attrs: {
      "metal": ["titanium", "platinum"]
    },
    excl_fields: [
      "metal-titanium",
      "metal-platinum",
    ]
  },
  "style-flat": {
    field: "style",
    value: "flat",
  },
  "style-easyfit": {
    field: "style",
    value: "easy-fit",
  },
  "style-court": {
    field: "style",
    value: "court",
  },
  "style-d": {
    field: "style",
    value: "d-shape",
  },
  "width-2": {
    field: "width",
    value: "2mm",
    excl_attrs: {
      "metal": ["titanium"]
    },
    excl_fields: [
      "metal-titanium"
    ]
  },
  "width-2.5": {
    field: "width",
    value: "2-5mm",
    excl_attrs: {
      "metal": ["rose-gold", "titanium"]
    },
    excl_fields: [
      "metal-titanium",
      "metal-rosegold",
    ]
  },
  "width-3": {
    field: "width",
    value: "3mm",
    excl_attrs: {
      "metal": ["titanium"]
    },
    excl_fields: [
      "metal-titanium"
    ]
  },
  "width-4": {
    field: "width",
    value: "4mm",
  },
  "width-5": {
    field: "width",
    value: "5mm",
  },
  "width-6": {
    field: "width",
    value: "6mm",
    excl_attrs: {
      "metal": ["rose-gold"]
    },
    excl_fields: [
      "metal-rosegold"
    ]
  },
  "width-8": {
    field: "width",
    value: "8mm",
    excl_attrs: {
      "metal": ["rose-gold"]
    },
    excl_fields: [
      "metal-rosegold"
    ]
  },
  "metal-yellowgold": {
    field: "metal",
    value: "yellow-gold"
  },
  "metal-rosegold": {
    field: "metal",
    value: "rose-gold",
    excl_attrs: {
      "width": ["6mm", "8mm", "2.5mm"]
    },
    excl_fields: [
      "width-6",
      "width-8",
      "width-2.5"
    ]
  },
  "metal-whitegold": {
    field: "metal",
    value: "white-gold"
  },
  "metal-platinum": {
    field: "metal",
    value: "platinum",
    excl_attrs: {
      "carat": ["9ct", "18ct"]
    },
    excl_fields: [
      "carat-9", "carat-18"
    ]
  },
  "metal-titanium": {
    field: "metal",
    value: "titanium",
    excl_attrs: {
      "width": ["2mm", "2.5mm", "3mm"],
      "carat": ["9ct", "18ct"]
    },
    excl_fields: [
      "carat-9", "carat-18", "width-2", "width-2.5", "width-3"
    ]
  }
};

// width-style-metal => random bullshit URL because we can't
// be bothered to reupload and standardise
const image_srcs = {
  "court-platinum-2-5mm": "2020/08/PWR-S25M-FS_0.jpg",
  "court-platinum-2mm": "2020/04/PWR-S20M-CT_0-2.jpg",
  "court-platinum-3mm": "2020/07/RS-MC-W3-0-3.jpg",
  "court-platinum-4mm": "2020/07/RS-MC-W4-0-3.jpg",
  "court-platinum-5mm": "2020/07/RS-MC-W5-0-3.jpg",
  "court-platinum-6mm": "2020/07/RS-MC-W6-0-3.jpg",
  "court-platinum-8mm": "2020/07/RS-MC-W8-0-3.jpg",
  "court-rose-gold-2mm": "2020/05/PWR-R20M-CT_0-6.jpg",
  "court-rose-gold-3mm": "2020/07/RS-MC-R3-0-1.jpg",
  "court-rose-gold-4mm": "2020/07/RS-MC-R4-0-1.jpg",
  "court-rose-gold-5mm": "2020/07/RS-MC-R5-0-1.jpg",
  "court-titanium-4mm": "2020/06/T-LR652-4x1.6mm-1-2.jpg",
  "court-titanium-5mm": "2020/06/T-LR1405-2.jpg",
  "court-titanium-6mm": "2020/06/T-LR656-6x1.9mm-1-2.jpg",
  "court-titanium-8mm": "2020/06/T-LR660-8x2.3mm-1-2.jpg",
  "court-white-gold-2-5mm": "2020/08/PWR-S25M-FS_0.jpg",
  "court-white-gold-2mm": "2020/02/PWR-S20M-CT_0.jpg",
  "court-white-gold-3mm": "2020/07/RS-MC-W3-0-1.jpg",
  "court-white-gold-4mm": "2020/07/RS-MC-W4-0-3.jpg",
  "court-white-gold-5mm": "2020/07/RS-MC-W5-0-3.jpg",
  "court-white-gold-6mm": "2020/07/RS-MC-W6-0-3.jpg",
  "court-white-gold-8mm": "2020/07/RS-MC-W8-0-3.jpg",
  "court-yellow-gold-2-5mm": "2020/02/PWR-G25M-CT_0.jpg",
  "court-yellow-gold-2mm": "2020/02/PWR-G25M-CT_0.jpg",
  "court-yellow-gold-3mm": "2020/07/RS-MC-Y3-0-2.jpg",
  "court-yellow-gold-4mm": "2020/07/RS-MC-Y4-0-1.jpg",
  "court-yellow-gold-5mm": "2020/07/RS-MC-Y5-0-1.jpg",
  "court-yellow-gold-6mm": "2020/07/RS-MC-Y6-0-1.jpg",
  "court-yellow-gold-8mm": "2020/07/RS-MC-Y8-0-1.jpg",
  "d-shape-platinum-2-5mm": "2020/08/PWR-S25M-DS_0.jpg",
  "d-shape-platinum-2mm": "2020/04/PWR-S20M-DS_0-2.jpg",
  "d-shape-platinum-3mm": "2020/04/PWR-S3M-DS_0-1.jpg",
  "d-shape-platinum-4mm": "2020/04/PWR-S4M-DS_0-1.jpg",
  "d-shape-platinum-5mm": "2020/04/PWR-S5M-DS_0-1.jpg",
  "d-shape-platinum-6mm": "2020/04/PWR-S6M-DS_0-1.jpg",
  "d-shape-platinum-8mm": "2020/04/PWR-S8M-DS_0-1.jpg",
  "d-shape-rose-gold-2mm": "2020/05/PWR-R20M-DS_0-1.jpg",
  "d-shape-rose-gold-3mm": "2020/02/PWR-R4M-DS_0.jpg",
  "d-shape-rose-gold-4mm": "2020/02/PWR-R4M-DS_0.jpg",
  "d-shape-rose-gold-5mm": "2020/05/PWR-R5M-DS_0-5.jpg",
  "d-shape-titanium-4mm": "2020/06/T-LR650-4x1.6mm-2-2.jpg",
  "d-shape-titanium-5mm": "2020/06/T-LR1407-2.jpg",
  "d-shape-titanium-6mm": "2020/06/T-LR654-6x1.9mm-1-2.jpg",
  "d-shape-titanium-8mm": "2020/06/T-LR658-8x2.3mm-1-2.jpg",
  "d-shape-white-gold-2-5mm": "2020/08/PWR-S25M-DS_0.jpg",
  "d-shape-white-gold-2mm": "2020/04/PWR-S20M-DS_0-2.jpg",
  "d-shape-white-gold-3mm": "2020/04/PWR-S3M-DS_0-1.jpg",
  "d-shape-white-gold-4mm": "2020/04/PWR-S4M-DS_0-1.jpg",
  "d-shape-white-gold-5mm": "2020/04/PWR-S5M-DS_0-1.jpg",
  "d-shape-white-gold-6mm": "2020/04/PWR-S6M-DS_0-1.jpg",
  "d-shape-white-gold-8mm": "2020/04/PWR-S8M-DS_0-1.jpg",
  "d-shape-yellow-gold-2-5mm": "2020/02/PWR-G20M-DS_0.jpg",
  "d-shape-yellow-gold-2mm": "2020/02/PWR-G20M-DS_0.jpg",
  "d-shape-yellow-gold-3mm": "2020/02/PWR-G3M-DS_0.jpg",
  "d-shape-yellow-gold-4mm": "2020/02/PWR-G4M-DS_0.jpg",
  "d-shape-yellow-gold-5mm": "2020/02/PWR-G5M-DS_0.jpg",
  "d-shape-yellow-gold-6mm": "2020/02/PWR-G6M-DS_0.jpg",
  "d-shape-yellow-gold-8mm": "2020/02/PWR-G8M-DS_0.jpg",
  "easy-fit-platinum-2-5mm": "2020/04/PWR-S20M-FC_0.jpg",
  "easy-fit-platinum-2mm": "2020/04/PWR-S20M-FC_0.jpg",
  "easy-fit-platinum-3mm": "2020/04/PWR-S3M-FC_0.jpg",
  "easy-fit-platinum-4mm": "2020/04/PWR-S4M-FC_0.jpg",
  "easy-fit-platinum-5mm": "2020/04/PWR-S5M-FC_0.jpg",
  "easy-fit-platinum-6mm": "2020/04/PWR-S6M-FC_0.jpg",
  "easy-fit-platinum-8mm": "2020/04/PWR-S8M-FC_0.jpg",
  "easy-fit-rose-gold-2mm": "2020/05/PWR-R20M-FC_0-6.jpg",
  "easy-fit-rose-gold-3mm": "2020/05/PWR-R3M-FC_0-5.jpg",
  "easy-fit-rose-gold-4mm": "2020/05/PWR-R4M-FC_0-5.jpg",
  "easy-fit-rose-gold-5mm": "2020/05/PWR-R5M-FC_0-5.jpg",
  "easy-fit-titanium-4mm": "2020/06/T-LR653-4x1.6mm-1-2.jpg",
  "easy-fit-titanium-5mm": "2020/06/T-LR1409-2.jpg",
  "easy-fit-titanium-6mm": "2020/06/T-LR657-6x1.9mm-1-2.jpg",
  "easy-fit-titanium-8mm": "2020/06/T-LR661-8x2.3mm-1-2.jpg",
  "easy-fit-white-gold-2-5mm": "2020/04/PWR-S20M-FC_0.jpg",
  "easy-fit-white-gold-2mm": "2020/04/PWR-S20M-FC_0.jpg",
  "easy-fit-white-gold-3mm": "2020/04/PWR-S3M-FC_0.jpg",
  "easy-fit-white-gold-4mm": "2020/04/PWR-S4M-FC_0.jpg",
  "easy-fit-white-gold-5mm": "2020/04/PWR-S5M-FC_0.jpg",
  "easy-fit-white-gold-6mm": "2020/04/PWR-S6M-FC_0.jpg",
  "easy-fit-white-gold-8mm": "2020/04/PWR-S8M-FC_0.jpg",
  "easy-fit-yellow-gold-2-5mm": "2020/02/PWR-G20M-FC_0.jpg",
  "easy-fit-yellow-gold-2mm": "2020/02/PWR-G20M-FC_0.jpg",
  "easy-fit-yellow-gold-3mm": "2020/02/PWR-G3M-FC_0.jpg",
  "easy-fit-yellow-gold-4mm": "2020/02/PWR-G4M-FC_0.jpg",
  "easy-fit-yellow-gold-5mm": "2020/02/PWR-G5M-FC_0.jpg",
  "easy-fit-yellow-gold-6mm": "2020/02/PWR-G6M-FC_0.jpg",
  "easy-fit-yellow-gold-8mm": "2020/02/PWR-G8M-FC_0.jpg",
  "flat-platinum-2-5mm": "2020/04/PWR-S20M-FT_0.jpg",
  "flat-platinum-2mm": "2020/04/PWR-S20M-FT_0.jpg",
  "flat-platinum-3mm": "2020/04/PWR-S3M-FT_0.jpg",
  "flat-platinum-4mm": "2020/04/PWR-S4M-FT_0.jpg",
  "flat-platinum-5mm": "2020/04/PWR-S5M-FT_0.jpg",
  "flat-platinum-6mm": "2020/04/PWR-S6M-FT_0.jpg",
  "flat-platinum-8mm": "2020/04/PWR-S8M-FT_0.jpg",
  "flat-rose-gold-2mm": "2020/05/PWR-R25M-FT_0-1-1.jpg",
  "flat-rose-gold-3mm": "2020/05/PWR-R3M-FT_0-5.jpg",
  "flat-rose-gold-4mm": "2020/05/PWR-R4M-FT_0-5.jpg",
  "flat-rose-gold-5mm": "2020/05/PWR-R5M-FT_0-6.jpg",
  "flat-titanium-4mm": "2020/06/T-LR651-4x1.6mm-1-1.jpg",
  "flat-titanium-5mm": "2020/06/T-LR1403-1.jpg",
  "flat-titanium-6mm": "2020/06/T-LR655-6x1.9mm-1-1.jpg",
  "flat-titanium-8mm": "2020/06/T-LR659-8x2.3mm-1-1.jpg",
  "flat-white-gold-2-5mm": "2020/04/PWR-S20M-FT_0.jpg",
  "flat-white-gold-2mm": "2020/04/PWR-S20M-FT_0.jpg",
  "flat-white-gold-3mm": "2020/04/PWR-S3M-FT_0.jpg",
  "flat-white-gold-4mm": "2020/04/PWR-S4M-FT_0.jpg",
  "flat-white-gold-5mm": "2020/04/PWR-S5M-FT_0.jpg",
  "flat-white-gold-6mm": "2020/04/PWR-S6M-FT_0.jpg",
  "flat-white-gold-8mm": "2020/04/PWR-S8M-FT_0.jpg",
  "flat-yellow-gold-2-5mm": "2020/02/PWR-G20M-FT_0.jpg",
  "flat-yellow-gold-2mm": "2020/02/PWR-G20M-FT_0.jpg",
  "flat-yellow-gold-3mm": "2020/02/PWR-G3M-FT_0.jpg",
  "flat-yellow-gold-4mm": "2020/02/PWR-G4M-FT_0.jpg",
  "flat-yellow-gold-5mm": "2020/02/PWR-G5M-FT_0.jpg",
  "flat-yellow-gold-6mm": "2020/02/PWR-G6M-FT_0.jpg",
  "flat-yellow-gold-8mm": "2020/02/PWR-G8M-FT_0.jpg",
}

// Object representing the current state of selections
// the user has made
let selections = {
  ring_type: "ring-plain",
  carat: null,
  width: null,
  metal: null,
  style: null,
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
        excl = elem_details.excl_fields

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

  // Fetch the field to update and the value to set it to
  const affected_field = elem_details["field"];

  // Use the image which considers the rest of the current selection,
  // with the value which this option would set overridden.
  let selected = [
    affected_field === "style" ? elem.value : (selections.style || "court"),
    affected_field === "metal" ? elem.value : (selections.metal || "yellow-gold"),
    affected_field === "width" ? elem.value : (selections.width || "4mm")
  ];

  let key = selected.join("-");

  return "/uploads/" + image_srcs[key]
};

const updateImageSrc = (elem) => {
  const elem_image = document.getElementById(elem.id + "-image");
  const img_src = getImageSrc(elem);

  // Some things, such as the carat, don't have mutable images.
  // For those, img_src will be blank, so the relevant image
  // will not be updated.
  if (elem_image && img_src) {
    elem_image.src = img_src;
  }
}

// Initially, the URL is invalid and so we just link to '#'.
let url = '#';

// Entrypoint for the product chooser logic
document.addEventListener("DOMContentLoaded", function () {
  [...document.getElementsByClassName('ring-attribute-selector')].forEach((selector) => {
    selector.onclick = () => {
      updateUrlData(selector);
      updateImageSrc(selector);
    }
  });
  setHiddenOptions();
  assembleUrl();
});
