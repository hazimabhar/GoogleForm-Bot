//change the array based on the id on google form

function getAnswerFaiz8(){
    const arr =[
        "i84",
        "i87",
        "i90",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz8