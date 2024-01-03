//change the array based on the id on google form

function getAnswerFaiz18(){
    const arr =[
        "I intend to keep continuing using smartphone in the future., Strongly Disagree",
        "I intend to keep continuing using smartphone in the future., Disagree",
        "I intend to keep continuing using smartphone in the future., Neutral",
        "I intend to keep continuing using smartphone in the future., Agree",
        "I intend to keep continuing using smartphone in the future., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz18