let fields = {
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
    field: "size_width",
    value: "2mm",
    excl_attrs: {
      "metal": ["titanium"]
    },
    excl_fields: [
      "metal-titanium"
    ]
  },
  "width-2.5": {
    field: "size_width",
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
    field: "size_width",
    value: "3mm",
    excl_attrs: {
      "metal": ["titanium"]
    },
    excl_fields: [
      "metal-titanium"
    ]
  },
  "width-4": {
    field: "size_width",
    value: "4mm",
  },
  "width-5": {
    field: "size_width",
    value: "5mm",
  },
  "width-6": {
    field: "size_width",
    value: "6mm",
    excl_attrs: {
      "metal": ["rose-gold"]
    },
    excl_fields: [
      "metal-rosegold"
    ]
  },
  "width-8": {
    field: "size_width",
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
      "size_width": ["6mm", "8mm", "2.5mm"]
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
      "size_width": ["2mm", "2.5mm", "3mm"],
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
  carat: "carat-9",
  size_width: "width-2",
  metal: "metal-yellowgold",
  style: "style-court",
};

const assembleUrl = () => {
  // Fetch the pieces we want from the selections object; anything we don't want
  // will be null or undefined, and will be removed by the filter
  let arr = [
    fields[selections.carat].value,
    fields[selections.size_width].value,
    fields[selections.metal].value,
    fields[selections.style].value,
    "wedding-ring",
  ].filter(Boolean)

  // Construct the URL by joining the components
  url = arr.join("-")
};

const setHiddenOptions = () => {
  let selected = [selections.carat, selections.size_width, selections.style, selections.metal];
  let excluded = []

  // Push all excluded element ID sets
  selected.forEach((entry) => { excluded.push(fields[entry][excl_fields]) })
  // Deduplicate
  excluded = new Set(excluded.flat());
  excluded = [...excluded];

  // Hide anything to exclude, reveal anything otherwise
  Object.keys(fields).forEach((field_id) => {
    document.getElementById(field_id).hidden = excluded.includes(field_id)
  });
}

const updateUrlData = (elem) => {
  // Find the appropriate content in the appropriate map for this element
  elem_details = fields[elem.id]

  // Fetch the field to update and the value to set it to
  let affected_field = elem_details["field"];

  // Set attributes of selections object
  selections[affected_field] = elem.id

  // Erase attributes that are impossible (e.g. carat)
  if (elem_details.excl_attrs !== undefined) {
    ["ring_type", "carat", "size_width", "metal", "style", "product_type"].forEach((attrib) => {
      excl = elem_details.excl_fields[attrib]

      // If there are excl_attrs for this attribute, and the current selection for this attribute
      // is in those excl_attrs, null that selection so it won't be included in the URL
      if (excl !== undefined && excl.includes(selections[attrib])) {
        selections[attrib] = null
      }
    });
  }

  setHiddenOptions();
  assembleUrl();
};

// Initially, the URL should be the default product.
let url;
assembleUrl();

document.getElementsByClassName('ring-attribute-selector').forEach((selector) => {
  selector.onclick = updateUrlData(selector);
});
