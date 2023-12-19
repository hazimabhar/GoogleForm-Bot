//change the array based on the id on google form

function getAnswerFaiz8(){
    const arr =[
        "i147",
        "i150",
        "i153",
        "i156",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz8