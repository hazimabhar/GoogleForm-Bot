//change the array based on the id on google form

function getAnswerFaiz23(){
    const arr =[
        "i81",
        "i84",
        "i87",
        "i90",
        "i93",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz23