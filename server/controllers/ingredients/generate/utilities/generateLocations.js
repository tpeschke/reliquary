const { randomIntFromInterval, getRandomFromArray } = require("../getRandom");

module.exports = function generateLocations() {
  const numberOfLocations = randomIntFromInterval(1, 3);

  return [...Array(numberOfLocations)].map((_) => {
    const copiedLocations = [...geographicLocations];

    const [location] = copiedLocations.splice(
      randomIntFromInterval(0, copiedLocations.length - 1),
      1
    );

    return {
      adjacency: getRandomFromArray(adjacency),
      location: location,
    };
  });
}

const adjacency = ["By", "In"];

const geographicLocations = [
  "Still Water",
  "Running Water",
  "Shallow Water",
  "Deep Water",
  "Sand",
  "Forests",
  "Grasslands",
  "Farmland",
  "Hills",
  "Forested Hills",
  "Mountains",
  "Forested Mountains",
  "Cliffs",
  "Swamps",
  "High Tide",
  "Low Tide",
];
