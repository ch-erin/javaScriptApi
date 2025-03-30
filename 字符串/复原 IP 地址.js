const restoreIpAddresses = (s) => {
  const res = [];
  const dfs = (subRes, start) => {
    if (subRes.length === 4)
      return start === s.length && res.push(subRes.join("."));

    for (let len = 1; len <= 3; len++) {
      if (
        start + len > s.length || // 越界终止
        (len > 1 && s[start] === "0") || // 前导零终止
        (len === 3 && s.substr(start, len) > 255) // 数值超限
      )
        break;
      dfs([...subRes, s.substr(start, len)], start + len);
    }
  };

  dfs([], 0);
  return res;
};
