//change the array based on the id on google form

function getAnswerFaiz8(){
    const arr =[
        "This smartphone brand is safe to use, Strongly Disagree",
        "This smartphone brand is safe to use, Disagree",
        "This smartphone brand is safe to use, Neutral",
        "This smartphone brand is safe to use, Agree",
        "This smartphone brand is safe to use, Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz8