//change the array based on the id on google form

function getAnswerFaiz23(){
    const arr =[
        "Single",
        "Married",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz23