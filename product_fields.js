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
  "style-dshape": {
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

export { fields };
