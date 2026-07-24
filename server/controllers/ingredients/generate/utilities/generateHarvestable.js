const { getRandomFromArray } = require("../getRandom");

module.exports = function generateHarvestable() {
  return getRandomFromArray(parts);
}

const parts = [
  "Leaves",
  "Leaves",
  "Leaves",
  "Leaves",
  "Roots",
  "Roots",
  "Roots",
  "Blossoms",
  "Blossoms",
  "Blossoms",
  "Vines",
  "Vines",
  "Seeds",
  "Seeds",
  "Seeds",
  "Seeds",
  "Fruit",
  "Fruit",
  "Fruit",
  "Fruit",
  "Stalks",
  "Stalks",
  "Stalks",
  "Moss",
];
