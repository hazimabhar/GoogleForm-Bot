//change the array based on the id on google form

function getAnswerFaiz2(){
    const arr =[
        "I can recognize my Smartphone brand among other competitors' brands., Strongly Disagree",
        "I can recognize my Smartphone brand among other competitors' brands., Disagree",
        "I can recognize my Smartphone brand among other competitors' brands., Neutral",
        "I can recognize my Smartphone brand among other competitors' brands., Agree",
        "I can recognize my Smartphone brand among other competitors' brands., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz2