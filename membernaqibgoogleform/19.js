//change the array based on the id on google form

function getAnswerFaiz19(){
    const arr =[
        "I intend to have a better purchase of smartphone in the future., Strongly Disagree",
        "I intend to have a better purchase of smartphone in the future., Disagree",
        "I intend to have a better purchase of smartphone in the future., Neutral",
        "I intend to have a better purchase of smartphone in the future., Agree",
        "I intend to have a better purchase of smartphone in the future., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz19