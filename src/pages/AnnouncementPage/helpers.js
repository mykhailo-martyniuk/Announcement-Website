export const findSimilar = (subject, announcements) => {
  const res = [];
  if (!subject) return res;
  const textToArr = (str) =>
    str
      .trim()
      .replace(/(#[\wа-яё]+)/gi, '')
      .replace(/[ ]+/g, ' ')
      .toLowerCase()
      .split(' ');
  const titleSubject = textToArr(subject.title);

  const descriptionSubject = textToArr(subject.description);

  for (let ann of announcements) {
    let hasInTitle = false;
    let hasInDescription = false;
    for (let wordT of titleSubject) {
      if (textToArr(ann.title).includes(wordT)) {
        hasInTitle = true;
        break;
      }
    }
    for (let wordD of descriptionSubject) {
      if (textToArr(ann.description).includes(wordD)) {
        hasInDescription = true;
        break;
      }
    }

    if (hasInDescription && hasInTitle) res.push(ann);
  }

  return res.filter((el) => el.id.toString() !== subject.id.toString());
};
