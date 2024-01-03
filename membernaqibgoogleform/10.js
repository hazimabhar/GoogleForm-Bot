//change the array based on the id on google form

function getAnswerFaiz10(){
    const arr =[
        "I will recommend my friend to buy this smartphone., Strongly Disagree",
        "I will recommend my friend to buy this smartphone., Disagree",
        "I will recommend my friend to buy this smartphone., Neutral",
        "I will recommend my friend to buy this smartphone., Agree",
        "I will recommend my friend to buy this smartphone., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz10