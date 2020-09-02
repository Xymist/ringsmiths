// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"SryH":[function(require,module,exports) {
module.exports = {
  "ring-plain": {
    "field": "ring_type",
    "value": "plain-shaped"
  },
  "ring-diamond": {
    "field": "ring_type",
    "value": "gem-set"
  },
  "carat-9": {
    "field": "carat",
    "value": "9ct",
    "excl_attrs": {
      "metal": ["titanium", "platinum"]
    },
    "excl_fields": ["metal-titanium", "metal-platinum"]
  },
  "carat-18": {
    "field": "carat",
    "value": "18ct",
    "excl_attrs": {
      "metal": ["titanium", "platinum"]
    },
    "excl_fields": ["metal-titanium", "metal-platinum"]
  },
  "style-flat": {
    "field": "style",
    "value": "flat"
  },
  "style-easyfit": {
    "field": "style",
    "value": "easy-fit"
  },
  "style-court": {
    "field": "style",
    "value": "court"
  },
  "style-dshape": {
    "field": "style",
    "value": "d-shape"
  },
  "width-2": {
    "field": "width",
    "value": "2mm",
    "excl_attrs": {
      "metal": ["titanium"]
    },
    "excl_fields": ["metal-titanium"]
  },
  "width-2.5": {
    "field": "width",
    "value": "2-5mm",
    "excl_attrs": {
      "metal": ["rose-gold", "titanium"]
    },
    "excl_fields": ["metal-titanium", "metal-rosegold"]
  },
  "width-3": {
    "field": "width",
    "value": "3mm",
    "excl_attrs": {
      "metal": ["titanium"]
    },
    "excl_fields": ["metal-titanium"]
  },
  "width-4": {
    "field": "width",
    "value": "4mm"
  },
  "width-5": {
    "field": "width",
    "value": "5mm"
  },
  "width-6": {
    "field": "width",
    "value": "6mm",
    "excl_attrs": {
      "metal": ["rose-gold"]
    },
    "excl_fields": ["metal-rosegold"]
  },
  "width-8": {
    "field": "width",
    "value": "8mm",
    "excl_attrs": {
      "metal": ["rose-gold"]
    },
    "excl_fields": ["metal-rosegold"]
  },
  "metal-yellowgold": {
    "field": "metal",
    "value": "yellow-gold"
  },
  "metal-rosegold": {
    "field": "metal",
    "value": "rose-gold",
    "excl_attrs": {
      "width": ["6mm", "8mm", "2.5mm"]
    },
    "excl_fields": ["width-6", "width-8", "width-2.5"]
  },
  "metal-whitegold": {
    "field": "metal",
    "value": "white-gold"
  },
  "metal-platinum": {
    "field": "metal",
    "value": "platinum",
    "excl_attrs": {
      "carat": ["9ct", "18ct"]
    },
    "excl_fields": ["carat-9", "carat-18"]
  },
  "metal-titanium": {
    "field": "metal",
    "value": "titanium",
    "excl_attrs": {
      "width": ["2mm", "2.5mm", "3mm"],
      "carat": ["9ct", "18ct"]
    },
    "excl_fields": ["carat-9", "carat-18", "width-2", "width-2.5", "width-3"]
  }
};
},{}],"DcJC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleCase = void 0;

var titleCase = function titleCase(option) {
  var words = option.split("-");
  words.forEach(function (word, idx, wds) {
    wds[idx] = word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return words.join(" ");
};

exports.titleCase = titleCase;
},{}],"aEaM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deselectSiblings = exports.allSiblings = void 0;

var allSiblings = function allSiblings(elem, match_class) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.classList.includes(match_class) && sibling !== elem) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

exports.allSiblings = allSiblings;

var deselectSiblings = function deselectSiblings(elem) {
  var sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.classList.includes('selectedOption') && sibling !== elem) {
      siblings.classList.remove('selectedOption');
    }

    sibling = sibling.nextSibling;
  }
};

exports.deselectSiblings = deselectSiblings;
},{}],"fTby":[function(require,module,exports) {

},{}],"l3tj":[function(require,module,exports) {
"use strict";

var _fields = _interopRequireDefault(require("../data/fields.json"));

var _title_case = _interopRequireDefault(require("./title_case.js"));

var _siblings = _interopRequireDefault(require("./siblings.js"));

require("../styles/product_chooser.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultSelections = function defaultSelections() {
  return {
    ring_type: "ring-plain",
    carat: null,
    width: null,
    metal: null,
    style: null
  };
}; // Object representing the current state of selections
// the user has made


var selections = defaultSelections();
var field_pfx = Object.keys(_fields.default).reduce(function (tally, field_name) {
  var field_id = field_name.split("-")[0];
  tally[field_id] = (tally[field_id] || 0) + 1;
  return tally;
}, {});

var assembleUrl = function assembleUrl() {
  var _fields$selections$ca, _fields$selections$wi, _fields$selections$me, _fields$selections$st;

  // Fetch the pieces we want from the selections object; anything we don't want
  // will be null or undefined, and will be removed by the filter
  var arr = [(_fields$selections$ca = _fields.default[selections.carat]) === null || _fields$selections$ca === void 0 ? void 0 : _fields$selections$ca.value, (_fields$selections$wi = _fields.default[selections.width]) === null || _fields$selections$wi === void 0 ? void 0 : _fields$selections$wi.value, (_fields$selections$me = _fields.default[selections.metal]) === null || _fields$selections$me === void 0 ? void 0 : _fields$selections$me.value, (_fields$selections$st = _fields.default[selections.style]) === null || _fields$selections$st === void 0 ? void 0 : _fields$selections$st.value, "wedding-ring"].filter(Boolean); // Construct the URL by joining the components

  url = arr.join("-");
};

var setHiddenOptions = function setHiddenOptions() {
  var selected = [selections.carat, selections.width, selections.style, selections.metal].filter(Boolean);
  var excluded = []; // Push all excluded element ID sets

  selected.forEach(function (entry) {
    excluded.push(_fields.default[entry]["excl_fields"]);
  }); // Deduplicate

  excluded = new Set(excluded.flat().filter(Boolean));
  excluded = _toConsumableArray(excluded); // Get the names of all the option fields

  var available_fields = Object.keys(_fields.default); // Hide anything to exclude, reveal anything otherwise

  available_fields.forEach(function (field_id) {
    var elem = document.getElementById(field_id);

    if (elem) {
      elem.hidden = excluded.includes(field_id);
    }

    ;
  });
  var excluded_pfx = excluded.reduce(function (tally, field_name) {
    var field_id = field_name.split("-")[0];
    tally[field_id] = (tally[field_id] || 0) + 1;
    return tally;
  }, {});
  Object.keys(selections).forEach(function (pfx) {
    var section = document.getElementById(pfx + '-option-section');

    if (section) {
      section.hidden = excluded_pfx[pfx] === field_pfx[pfx];
    }
  });
};

var updateUrlData = function updateUrlData(elem) {
  // Find the appropriate content in the appropriate map for this element
  var elem_details = _fields.default[elem.id]; // Fetch the field to update and the value to set it to

  var affected_field = elem_details["field"]; // Set attributes of selections object

  if (selections[affected_field] === elem.id) {
    selections[affected_field] = null; // We don't need to un-null any other fields, since by deselecting an element
    // we're always increasing the options available.
  } else {
    selections[affected_field] = elem.id; // Erase attributes that are impossible (e.g. carat)

    if (elem_details.excl_attrs !== undefined) {
      Object.keys(selections).forEach(function (attrib) {
        var excl = elem_details.excl_fields; // If there are excl_attrs for this attribute, and the current selection for this attribute
        // is in those excl_attrs, null that selection so it won't be included in the URL

        if (excl !== undefined && excl.includes(selections[attrib])) {
          selections[attrib] = null;
        }
      });
    }
  }

  ;
  setHiddenOptions();
  assembleUrl();
  setFinaliseUrl();
};

var validUrl = function validUrl() {
  var res = true;
  Object.keys(selections).forEach(function (key) {
    var associated_section = document.getElementById(key + '-option-section'); // If the key is null but the section is not hidden,
    // we're missing an attribute

    if (!selections[key] && associated_section && !associated_section.hidden) {
      res = false;
    }

    ;
  });
  return res;
}; // The "finalise" button takes the user to the relevant product page


var setFinaliseUrl = function setFinaliseUrl() {
  var btn = document.getElementById('finalise_ring');

  if (validUrl()) {
    btn.href = "/product/" + url;
  } else {
    btn.href = "#";
  }

  ;
};

var getImageSrc = function getImageSrc(elem) {
  var _fields$selections$st2, _fields$selections$me2, _fields$selections$wi2;

  // Find the appropriate content in the appropriate map for this element
  var elem_details = _fields.default[elem.id];

  if (elem_details === undefined) {
    return;
  } // Fetch the field to update and the value to set it to


  var affected_field = elem_details["field"]; // Use the image which considers the rest of the current selection,
  // with the value which this option would set overridden.

  var selected = [affected_field === "style" ? elem_details.value : ((_fields$selections$st2 = _fields.default[selections.style]) === null || _fields$selections$st2 === void 0 ? void 0 : _fields$selections$st2.value) || "court", affected_field === "metal" ? elem_details.value : ((_fields$selections$me2 = _fields.default[selections.metal]) === null || _fields$selections$me2 === void 0 ? void 0 : _fields$selections$me2.value) || "yellow-gold", affected_field === "width" ? elem_details.value : ((_fields$selections$wi2 = _fields.default[selections.width]) === null || _fields$selections$wi2 === void 0 ? void 0 : _fields$selections$wi2.value) || "4mm"];
  return imageUrl(selected.join("-"));
}; // For a given element, fetch its child image and update the src attribute


var updateImageSrc = function updateImageSrc(elem) {
  var elem_image = document.getElementById(elem.id + "-image");
  var img_src = getImageSrc(elem); // Some things, such as the carat, don't have mutable images.
  // For those, img_src will be blank, so the relevant image
  // will not be updated.

  if (elem_image && img_src) {
    elem_image.src = img_src;
    elem_image.srcset = "";
  }
}; // Get all attribute selectors, find their images and update
// them to use the latest selections or defaults.


var updateImages = function updateImages() {
  _toConsumableArray(document.getElementsByClassName('ring-attribute-selector')).forEach(function (selector) {
    updateImageSrc(selector);
  });
};

var skipToNextSection = function skipToNextSection(event) {
  // Do nothing if no selection has been made
  if ([null, undefined].includes(selections[event.target.id.split("-")[0]])) {
    return;
  }

  ; // Hide this section.

  var current_section = event.target.closest(".et_pb_section");
  current_section.style.display = "none"; // Open the next valid (i.e. not hidden) section.

  var next_section = current_section.nextElementSibling;

  while (next_section.hidden) {
    next_section = next_section.nextElementSibling;
  }

  ;
  next_section.style.display = "block";
};

var initialHide = function initialHide() {
  var sects = Object.keys(selections);
  sects.push("spec");
  sects.forEach(function (pfx) {
    var section = document.getElementById(pfx + '-option-section');

    if ([null, undefined].includes(section)) {
      return;
    }

    section.style.display = pfx === "metal" ? "block" : "none";
  });
};

var setSpecText = function setSpecText(carat, metal, style, width) {
  var target = document.getElementById('spec-text');
  target.innerHTML = "Your chosen ring is a ".concat(carat ? carat + ' ' : '').concat((0, _title_case.default)(metal), " ").concat((0, _title_case.default)(style), " wedding ring with a finger width of ").concat(width, ".");
};

var setSpecImage = function setSpecImage(metal, style, width) {
  var target = document.getElementById('spec-image');
  var selected = [style || "court", metal || "yellow-gold", width || "4mm"];
  target.src = imageUrl(selected.join("-"));
  target.srcset = "";
};

var imageUrl = function imageUrl(key) {
  return "/wp-content/uploads/2020/08/" + key + ".jpg";
};

var updateSpec = function updateSpec() {
  var _fields$selections$ca2, _fields$selections$me3, _fields$selections$st3, _fields$selections$wi3;

  var carat = (_fields$selections$ca2 = _fields.default[selections.carat]) === null || _fields$selections$ca2 === void 0 ? void 0 : _fields$selections$ca2.value;
  var metal = (_fields$selections$me3 = _fields.default[selections.metal]) === null || _fields$selections$me3 === void 0 ? void 0 : _fields$selections$me3.value;
  var style = (_fields$selections$st3 = _fields.default[selections.style]) === null || _fields$selections$st3 === void 0 ? void 0 : _fields$selections$st3.value;
  var width = (_fields$selections$wi3 = _fields.default[selections.width]) === null || _fields$selections$wi3 === void 0 ? void 0 : _fields$selections$wi3.value;
  setSpecText(carat, metal, style, width);
  setSpecImage(metal, style, width);
};

var resetChooser = function resetChooser() {
  selections = defaultSelections();
  initialHide();
  setHiddenOptions();
  assembleUrl();
};

var setSelected = function setSelected(elem) {
  elem.classList.add('selectedOption');
  (0, _siblings.default)(elem);
}; // Initially, the URL is invalid and so we just link to '#'.


var url = '#'; // Entrypoint for the product chooser logic

document.addEventListener("DOMContentLoaded", function () {
  _toConsumableArray(document.getElementsByClassName('ring-attribute-selector')).forEach(function (selector) {
    selector.onclick = function () {
      setSelected(selector);
      updateUrlData(selector);
      updateImages();
      updateSpec();
    };
  });

  _toConsumableArray(document.getElementsByClassName('next-button')).forEach(function (btn) {
    btn.onclick = function (event) {
      event.preventDefault();
      skipToNextSection(event);
    };
  });

  _toConsumableArray(document.getElementsByClassName('reset-button')).forEach(function (btn) {
    btn.onclick = function (event) {
      event.preventDefault();
      resetChooser();
    };
  });

  resetChooser();
});
},{"../data/fields.json":"SryH","./title_case.js":"DcJC","./siblings.js":"aEaM","../styles/product_chooser.css":"fTby"}]},{},["l3tj"], null)