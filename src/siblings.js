const deselectSiblings = (elem) => {
  let sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.classList.includes('selectedOption') && sibling !== elem) {
      siblings.classList.remove('selectedOption');
    }
    sibling = sibling.nextSibling
  }
};

export { deselectSiblings };
