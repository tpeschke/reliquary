const { randomIntFromInterval, getRandomFromArray } = require("../getRandom");

const animals = require("./nameArrays/animals");
const commonEndings = require("./nameArrays/commonEndings");
const colors = require("./nameArrays/colors");
const seasons = require("./nameArrays/seasons");
const times = require("./nameArrays/times");
const adjectives = require("./nameArrays/adjectives");
const actions = require("./nameArrays/actions");

module.exports = function generateSyllableJumble() {
    const baseName = getBaseName();

    const number = randomIntFromInterval(1, 12);

    switch (number) {
        case 1:
            return `${getRandomFromArray(animals)} ${baseName}`;
        case 2:
            return `${getRandomFromArray(colors)} ${baseName}`;
        case 3:
            return `${baseName} ${getRandomFromArray(commonEndings)}`;
        case 4:
            return `${getRandomFromArray(seasons)} ${baseName}`;
        case 5:
            return `${getRandomFromArray(times)} ${baseName}`;
        case 6:
            return `${getRandomFromArray(adjectives)} ${baseName}`;
        case 7:
            return `${getRandomFromArray(actions)}ing ${baseName}`;
        default:
            return baseName;
    }
}

function getBaseName() {
    const numberOfSyllables = randomIntFromInterval(2, 3);

    let name = "";

    const _ = [...Array(numberOfSyllables)].forEach((_) => {
        const randomSyllable = getRandomFromArray(syllables);
        name += randomSyllable;
    });

    return capitalizeFirstLetter(name);
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const syllables = [
    "all",
    "sp",
    "ice",
    "an",
    "gel",
    "i",
    "ca",
    "ani",
    "se",
    "as",
    "afo",
    "eti",
    "da",
    "ba",
    "y",
    "ba",
    "sil",
    "berg",
    "amot",
    "cum",
    "in",
    "mus",
    "pep",
    "per",
    "bor",
    "age",
    "bur",
    "net",
    "car",
    "a",
    "way",
    "da",
    "mom",
    "cas",
    "sia",
    "cay",
    "enne",
    "pep",
    "per",
    "cel",
    "ery",
    "cher",
    "vil",
    "chi",
    "co",
    "ry",
    "chi",
    "li",
    "ves",
    "ci",
    "ce",
    "ly",
    "lan",
    "tro",
    "cin",
    "na",
    "mon",
    "clo",
    "ve",
    "co",
    "rian",
    "der",
    "cost",
    "mar",
    "y",
    "cur",
    "ry",
    "dill",
    "fen",
    "nel",
    "fenu",
    "gre",
    "ek",
    "gin",
    "ger",
    "par",
    "ad",
    "ise",
    "ho",
    "ly",
    "ba",
    "sil",
    "hore",
    "hou",
    "nd",
    "hor",
    "se",
    "rad",
    "ish",
    "hys",
    "sop",
    "la",
    "ven",
    "der",
    "le",
    "mon",
    "alm",
    "lem",
    "on",
    "ver",
    "be",
    "na",
    "lic",
    "o",
    "rice",
    "lo",
    "va",
    "ge",
    "ma",
    "ce",
    "mar",
    "jo",
    "ram",
    "nut",
    "meg",
    "or",
    "ega",
    "no",
    "pa",
    "pri",
    "ka",
    "pars",
    "ley",
    "pep",
    "per",
    "mint",
    "pop",
    "py",
    "se",
    "ed",
    "ro",
    "se",
    "ma",
    "ry",
    "rue",
    "saf",
    "fron",
    "sa",
    "ge",
    "sa",
    "vo",
    "ry",
    "se",
    "sa",
    "me",
    "sor",
    "rel",
    "sta",
    "ran",
    "ise",
    "spe",
    "ar",
    "mint",
    "tar",
    "ra",
    "gon",
    "thy",
    "me",
    "turm",
    "er",
    "ic",
    "va",
    "nil",
    "la",
    "was",
    "abi",
];
