//change the array based on the id on google form

function getAnswerFaiz5(){
    const arr =[
        "My smartphone brand is reliable brand, Strongly Disagree",
        "My smartphone brand is reliable brand, Disagree",
        "My smartphone brand is reliable brand, Neutral",
        "My smartphone brand is reliable brand, Agree",
        "My smartphone brand is reliable brand, Strongly Agree",

    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz5