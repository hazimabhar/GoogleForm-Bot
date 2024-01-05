//change the array based on the id on google form

function getAnswerFaiz21(){
    const arr =[
        "Single",
        "Married",
        "Divorced",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz21