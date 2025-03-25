function mark(s) {
  const cnt = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = [];

  for (const c of s) {
    if (cnt[c]) stack.push(c);
    else {
      if (stack.length == 0) return false;
      if (cnt[stack.pop()] !== c) return false;
    }
  }

  return stack.length == 0;
}
