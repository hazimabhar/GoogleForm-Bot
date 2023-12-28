//change the array based on the id on google form

function getAnswerFaiz17(){
    const arr =[
        "i138",
        "i141",
        "i144",
        "i147",
        "i150",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz17