const getRandomMalayMaleName = require('./malayMaleName');
const getRandomMalayFemale = require('./malayFemaleName');
const getrandomChineseName = require('./chineseName');
const getRandomIndianMaleName = require('./indianMaleName');
const getRandomFemaleIndianName = require('./indianFemaleName');

function getRandomName(){
    let arr = [
        getRandomMalayMaleName(),
        getRandomMalayFemale(),
        getrandomChineseName(),
        getRandomIndianMaleName(),
        getRandomFemaleIndianName()
    ];

    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getRandomName;