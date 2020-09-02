const deselectSiblings = (elem) => {
  // Find the row this belongs in, and grab its first column, as
  // the columns are the direct children
  let sibling_column = elem.closest('.et_pb_row').firstElementChild;

  // If there's another column to consider, keep going
  while (sibling_column) {
    // Grab the first important child of that column, which will be
    // the named div we're shadowing
    let sibling = sibling_column.firstElementChild;

    // If it exists and is selected, and is not the thing that was just clicked,
    // deselect it.
    if (sibling && sibling.classList.contains('selectedOption') && sibling !== elem) {
      sibling.classList.remove('selectedOption');
    }

    // Move to the next column in the row and repeat the loop
    sibling_column = sibling_column.nextSibling
  }
};

export default deselectSiblings;
