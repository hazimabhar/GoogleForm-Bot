//change the array based on the id on google form

function getAnswerFaiz1(){
    const arr =[
        "I am aware of my smartphone brand., Strongly Disagree",
        "I am aware of my smartphone brand., Disagree",
        "I am aware of my smartphone brand., Neutral",
        "I am aware of my smartphone brand., Agree",
        "I am aware of my smartphone brand., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz1