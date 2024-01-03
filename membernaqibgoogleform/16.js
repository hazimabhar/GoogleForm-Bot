//change the array based on the id on google form

function getAnswerFaiz16(){
    const arr =[
        "I will use smartphone regularly in the future., Strongly Disagree",
        "I will use smartphone regularly in the future., Disagree",
        "I will use smartphone regularly in the future., Neutral",
        "I will use smartphone regularly in the future., Agree",
        "I will use smartphone regularly in the future., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz16