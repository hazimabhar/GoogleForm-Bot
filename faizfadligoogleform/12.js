//change the array based on the id on google form

function getAnswerFaiz12(){
    const arr =[
        "i62",
        "i65",
        "i68",
        "i71",
        "i74",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz12