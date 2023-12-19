//change the array based on the id on google form

function getAnswerFaiz6(){
    const arr =[
        "i112",
        "i115",
        "i118",
        "i121",
        "i124",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz6