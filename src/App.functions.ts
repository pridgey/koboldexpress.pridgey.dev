const randomIncrement = (i: number, f: number) =>
  Math.min(Math.max(i * (100 / f || 1), 0), 100);

export const randomNumInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const generateSideNoise = (factor: number) => {
  const results = [];

  // refactor this to be better
  for (let i = 0; i < factor; i++) {
    results.push(
      `${randomIncrement(i, factor).toFixed(2)}% ${randomNumInRange(
        0,
        1
      ).toFixed(2)}%`
    );
  }
  for (let i = 0; i < factor; i++) {
    results.push(
      `${randomNumInRange(99, 100).toFixed(2)}% ${randomIncrement(
        i,
        factor
      ).toFixed(2)}%`
    );
  }
  for (let i = factor; i > 0; i--) {
    results.push(
      `${randomIncrement(i, factor).toFixed(2)}% ${randomNumInRange(
        99,
        100
      ).toFixed(2)}%`
    );
  }
  for (let i = factor; i > 0; i--) {
    results.push(
      `${randomNumInRange(0, 1).toFixed(2)}% ${randomIncrement(
        i,
        factor
      ).toFixed(2)}%`
    );
  }

  return results.join(",");
};
