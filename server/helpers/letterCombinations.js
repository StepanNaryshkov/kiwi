const words = require("./../mock/words.json");

function binarySearch(arr, x) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    let res = x.localeCompare(arr[m]);
    if (res == 0) return m;

    if (res > 0) l = m + 1;
    else r = m - 1;
  }

  return -1;
}

exports.letterCombinations = function (digits) {
  if (digits == null || digits.length === 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];
  const go = (i, s) => {
    if (i === digits.length) {
      res.push(s);
      return;
    }

    for (const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };

  go(0, "");
  const outcome = [];

  for (let i = 0; i < res.length; i++) {
    const word = res[i];
    const rowForSearching = word.length;

    if (words[rowForSearching]) {
      const ind = binarySearch(words[rowForSearching], word);
      if (ind !== -1) {
        outcome.push(word);
      }
    }
  }

  return outcome;
};
