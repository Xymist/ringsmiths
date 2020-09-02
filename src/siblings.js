const allSiblings = (elem, match_class) => {
  let siblings = [];
  let sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.classList.includes(match_class) && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }

  return siblings;
};

const deselectSiblings = (elem) => {
  let sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.classList.includes('selectedOption') && sibling !== elem) {
      siblings.classList.remove('selectedOption');
    }
    sibling = sibling.nextSibling
  }
}

export { allSiblings, deselectSiblings };
