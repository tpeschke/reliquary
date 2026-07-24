import randomIntFromInterval, { getRandomFromArray } from "../../getRandom";

import commonEndings from "./nameArrays/commonEndings";
import professions from "./nameArrays/professions";
import everydayObjects from "./nameArrays/everydayObjects";
import locations from "./nameArrays/locations";
import colors from "./nameArrays/colors";
import geography from "./nameArrays/geography";
import animals from "./nameArrays/animals";
import monsters from "./nameArrays/monsters";
import names from "./nameArrays/names";
import divines from "./nameArrays/divines";
import bodyParts from "./nameArrays/bodyParts";
import times from "./nameArrays/times";
import seasons from "./nameArrays/seasons";
import actions from "./nameArrays/actions";
import ancestries from "./nameArrays/ancestries";

import generateSyllableJumble from "./generateSyllableJumble";
import adjectives from "./nameArrays/adjectives";

module.exports = function generatePlantName() {
  const number = randomIntFromInterval(1, 6);

  if (number === 1) {
    return generateSyllableJumble();
  }

  const baseName = getBaseName();

  if (number === 2) {
    return `${baseName}\nTRANSLATE TO ANOTHER LANGUAGE`;
  } else if (number === 3) {
    return `${baseName}\nNAME CORRUPTED`;
  }

  return baseName;
}

function getBaseName() {
  const number = randomIntFromInterval(1, 89);

  switch (number) {
    case 1:
      return `${getRandomFromArray(professions)}'s ${getRandomFromArray(
        everydayObjects
      )}`;
    case 2:
      return `${getRandomFromArray(professions)}'s ${getRandomFromArray(
        locations
      )}`;
    case 3:
      return `${getRandomFromArray(professions)}'s ${getRandomFromArray(
        commonEndings
      )}`;
    case 4:
      return `${getRandomFromArray(locations)}${getRandomFromArray(
        commonEndings
      ).toLowerCase()}`;
    case 5:
      return `${getRandomFromArray(colors)}${getRandomFromArray(
        commonEndings
      ).toLowerCase()}`;
    case 6:
      return `${getRandomFromArray(colors)} ${getRandomFromArray(
        geography
      )}${getRandomFromArray(commonEndings).toLowerCase()}`;
    case 7:
      return `${getRandomFromArray(geography)} ${getRandomFromArray(
        locations
      )}${getRandomFromArray(commonEndings).toLowerCase()}`;
    case 8:
      return `${getRandomFromArray(geography)} ${getRandomFromArray(
        everydayObjects
      )}`;
    case 9:
      return `${getRandomFromArray(animals)}'s ${getRandomFromArray(
        commonEndings
      )}`;
    case 10:
      return `${getRandomFromArray(colors)} ${getRandomFromArray(
        animals
      )} ${getRandomFromArray(commonEndings)}`;
    case 11:
      return `${getRandomFromArray(professions)}'s ${getRandomFromArray(
        animals
      )}`;
    case 12:
      return `${getRandomFromArray(animals)}'s ${getRandomFromArray(
        everydayObjects
      )}`;
    case 13:
      return `${getRandomFromArray(monsters)}'s ${getRandomFromArray(
        commonEndings
      )}`;
    case 14:
      return `${getRandomFromArray(colors)} ${getRandomFromArray(
        monsters
      )} ${getRandomFromArray(commonEndings)}`;
    case 15:
      return `${getRandomFromArray(professions)}'s ${getRandomFromArray(
        monsters
      )}`;
    case 16:
      return `${getRandomFromArray(monsters)}'s ${getRandomFromArray(
        everydayObjects
      )}`;
    case 17:
      return `${getRandomFromArray(names)}'s ${getRandomFromArray(
        everydayObjects
      )}`;
    case 18:
      return `${getRandomFromArray(names)}'s ${getRandomFromArray(locations)}`;
    case 19:
      return `${getRandomFromArray(names)}'s ${getRandomFromArray(
        commonEndings
      )}`;
    case 20:
      return `${getRandomFromArray(names)}'s ${getRandomFromArray(monsters)}`;
    case 21:
      return `${getRandomFromArray(divines)}'s ${getRandomFromArray(
        everydayObjects
      )}`;
    case 22:
      return `${getRandomFromArray(divines)}'s ${getRandomFromArray(
        locations
      )}`;
    case 23:
      return `${getRandomFromArray(divines)}'s ${getRandomFromArray(
        commonEndings
      )}`;
    case 24:
      return `${getRandomFromArray(divines)}'s ${getRandomFromArray(monsters)}`;
    case 25:
      return `${getRandomFromArray(animals)}'s ${getRandomFromArray(
        bodyParts
      )}`;
    case 26:
      return `${getRandomFromArray(colors)} ${getRandomFromArray(bodyParts)}`;
    case 27:
      return `${getRandomFromArray(bodyParts)}${getRandomFromArray(
        commonEndings
      ).toLowerCase()}`;
    case 28:
      return `${getRandomFromArray(divines)}'s ${getRandomFromArray(
        bodyParts
      )}`;
    case 29:
      return `${getRandomFromArray(geography)} ${getRandomFromArray(
        bodyParts
      )}`;
    case 30:
      return `${getRandomFromArray(monsters)}'s ${getRandomFromArray(
        bodyParts
      )}`;
    case 31:
      return `${getRandomFromArray(bodyParts)} ${getRandomFromArray(
        bodyParts
      )}`;
    case 32:
      return `${getRandomFromArray(professions)}'s ${getRandomFromArray(
        bodyParts
      )}`;
    case 33:
      return `${getRandomFromArray(times)}${getRandomFromArray(
        commonEndings
      ).toLowerCase()}`;
    case 34:
      return `${getRandomFromArray(times)} ${getRandomFromArray(bodyParts)}`;
    case 35:
      return `${getRandomFromArray(times)} ${getRandomFromArray(
        everydayObjects
      )}`;
    case 36:
      return `${getRandomFromArray(times)} ${getRandomFromArray(animals)}`;
    case 37:
      return `${getRandomFromArray(times)} ${getRandomFromArray(monsters)}`;
    case 38:
      return `${getRandomFromArray(times)} ${getRandomFromArray(colors)}`;
    case 39:
      return `${getRandomFromArray(seasons)}${getRandomFromArray(
        commonEndings
      ).toLowerCase()}`;
    case 40:
      return `${getRandomFromArray(seasons)} ${getRandomFromArray(bodyParts)}`;
    case 41:
      return `${getRandomFromArray(seasons)} ${getRandomFromArray(
        everydayObjects
      )}`;
    case 42:
      return `${getRandomFromArray(seasons)} ${getRandomFromArray(animals)}`;
    case 43:
      return `${getRandomFromArray(seasons)} ${getRandomFromArray(monsters)}`;
    case 44:
      return `${getRandomFromArray(seasons)} ${getRandomFromArray(colors)}`;
    case 45:
      return `${getRandomFromArray(animals)} ${getRandomFromArray(
        commonEndings
      )}`;
    case 46:
      return `${getRandomFromArray(colors)} ${getRandomFromArray(
        everydayObjects
      )}`;
    case 47:
      return `${getRandomFromArray(animals)} ${getRandomFromArray(colors)}`;
    case 48:
      return `${getRandomFromArray(times)} ${getRandomFromArray(colors)}`;
    case 49:
      return `${getRandomFromArray(seasons)} ${getRandomFromArray(colors)}`;
    case 50:
      return `${getRandomFromArray(geography)} ${getRandomFromArray(colors)}`;
    case 51:
      return `${getRandomFromArray(locations)} ${getRandomFromArray(colors)}`;
    case 52:
      return `${getRandomFromArray(professions)}'s ${getRandomFromArray(
        colors
      )}`;
    case 53:
      return `${getRandomFromArray(animals)} ${getRandomFromArray(
        everydayObjects
      )}`;
    case 54:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(
        commonEndings
      )}`;
    case 55:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(names)}`;
    case 56:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(seasons)}`;
    case 57:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(times)}`;
    case 58:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(colors)}`;
    case 59:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(animals)}`;
    case 60:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(
        bodyParts
      )}`;
    case 61:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(
        seasons
      )} ${getRandomFromArray(commonEndings)}`;
    case 62:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(
        times
      )} ${getRandomFromArray(commonEndings)}`;
    case 63:
      return `${getRandomFromArray(colors)} ${getRandomFromArray(
        seasons
      )} ${getRandomFromArray(commonEndings)}`;
    case 64:
      return `${getRandomFromArray(colors)} ${getRandomFromArray(
        times
      )} ${getRandomFromArray(commonEndings)}`;
    case 65:
      return `${getRandomFromArray(actions)}ing ${getRandomFromArray(animals)}`;
    case 66:
      return `${getRandomFromArray(actions)}ing ${getRandomFromArray(
        bodyParts
      )}`;
    case 67:
      return `${getRandomFromArray(actions)}ing ${getRandomFromArray(colors)}`;
    case 68:
      return `${getRandomFromArray(actions)}ing ${getRandomFromArray(
        commonEndings
      )}`;
    case 69:
      return `${getRandomFromArray(actions)}ing ${getRandomFromArray(
        geography
      )}`;
    case 70:
      return `${getRandomFromArray(actions)}ing ${getRandomFromArray(
        locations
      )}`;
    case 71:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(
        monsters
      )}`;
    case 72:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(actions)}`;
    case 73:
      return `${getRandomFromArray(animals)}'s ${getRandomFromArray(actions)}`;
    case 74:
      return `${getRandomFromArray(divines)}'s ${getRandomFromArray(actions)}`;
    case 75:
      return `${getRandomFromArray(geography)}'s ${getRandomFromArray(
        actions
      )}`;
    case 76:
      return `${getRandomFromArray(monsters)}'s ${getRandomFromArray(actions)}`;
    case 77:
      return `${getRandomFromArray(names)}'s ${getRandomFromArray(actions)}`;
    case 78:
      return `${getRandomFromArray(professions)}'s ${getRandomFromArray(
        actions
      )}`;
    case 79:
      return `${getRandomFromArray(seasons)}'s ${getRandomFromArray(actions)}`;
    case 80:
      return `${getRandomFromArray(times)}'s ${getRandomFromArray(actions)}`;
    case 81:
      return `${getRandomFromArray(actions)}'s ${getRandomFromArray(
        ancestries
      )}`;
    case 82:
      return `${getRandomFromArray(ancestries)} ${getRandomFromArray(actions)}`;
    case 83:
      return `${getRandomFromArray(adjectives)} ${getRandomFromArray(
        ancestries
      )}`;
    case 84:
      return `${getRandomFromArray(ancestries)} ${getRandomFromArray(
        bodyParts
      )}`;
    case 85:
      return `${getRandomFromArray(colors)} ${getRandomFromArray(
        ancestries
      )} ${getRandomFromArray(commonEndings)}`;
    case 86:
      return `${getRandomFromArray(ancestries)}'s ${getRandomFromArray(
        commonEndings
      )}`;
    case 87:
      return `${getRandomFromArray(ancestries)}'s ${getRandomFromArray(
        everydayObjects
      )}`;
    case 88:
      return `${getRandomFromArray(seasons)} ${getRandomFromArray(ancestries)}`;
    case 89:
      return `${getRandomFromArray(monsters)} ${getRandomFromArray(
        commonEndings
      )}`;
  }
}
