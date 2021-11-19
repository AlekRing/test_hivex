export const mokRequests = (num: number) => {
  const text = "track.get";
  const arr = [{ action: text, done: true }];

  for (let i = 0; i < num; i++) {
    arr.push({ action: text, done: i % 2 === 0 ? false : true });
  }

  return arr;
};
