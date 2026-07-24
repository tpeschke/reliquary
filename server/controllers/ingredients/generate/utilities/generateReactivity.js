const { randomIntFromInterval, getRandomFromArray } = require("../getRandom");

module.exports = function generateReactivity() {
  const top = generateNode();
  const topRight = generateNode();
  const bottomRight = generateNode();
  const bottom = generateNode();
  const bottomLeft = generateNode();
  const topLeft = generateNode();

  if (
    ![top, topRight, bottomRight, bottom, bottomLeft, topLeft].every(
      (val) => !val
    )
  ) {
    return [top, topRight, bottomRight, bottom, bottomLeft, topLeft];
  }

  return [getRandomFromArray(penalty), null, null, null, null, null];
}

function generateNode() {
  const likelihood = randomIntFromInterval(0, 2);

  if (likelihood === 2) {
    return getRandomFromArray(penalty);
  }

  return null;
}

const penalty = ["Stress", "Damage"];
