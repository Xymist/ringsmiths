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
  elem_details = fields[elem.id]

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
  Object.keys(selections).forEach((key) => {
    let associated_section = document.getElementById(key + '-option-section');
    // If the key is null but the section is not hidden,
    // we're missing an attribute
    if (!selections[key] && associated_section && !associated_section.hidden) {
      return false
    };
  });

  return true
};

const setFinaliseUrl = () => {
  let btn = document.getElementById('finalise_ring');

  if (validUrl()) {
    btn.href = "/" + url;
  } else {
    btn.href = "#";
  };
};

// Initially, the URL is invalid and so we just link to '#'.
let url;
setHiddenOptions();
assembleUrl();

document.addEventListener("DOMContentLoaded", function () {
  [...document.getElementsByClassName('ring-attribute-selector')].forEach((selector) => {
    selector.onclick = () => updateUrlData(selector);
  });
});
