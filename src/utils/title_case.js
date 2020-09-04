// @flow

const titleCase = (option: string) => {
  let words = option.replace("2-5", "2.5").split("-");
  words.forEach((word, idx, wds) => {
    wds[idx] = word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return words.join(" ");
};

export default titleCase;
