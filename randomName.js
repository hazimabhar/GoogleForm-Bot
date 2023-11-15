const getRandomMalayMaleName = require('./malayMaleName');
const getRandomMalayFemale = require('./malayFemaleName');

function getRandomName(){
    let arr = [
        getRandomMalayMaleName(),
        getRandomMalayFemale()
    ];

    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getRandomName;