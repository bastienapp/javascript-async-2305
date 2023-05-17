function getRandomValue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random(); // 0 et 0.999999...
      if (rand >= 0.5) {
        resolve(rand);
      } else {
        reject("Value < 0.5");
      }
    }, 1000);
  });
}

export { getRandomValue };
