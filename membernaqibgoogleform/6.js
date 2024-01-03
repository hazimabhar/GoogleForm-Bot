//change the array based on the id on google form

function getAnswerFaiz6(){
    const arr =[
        "I purchase my favorite brand of smartphone only., Strongly Disagree",
        "I purchase my favorite brand of smartphone only., Disagree",
        "I purchase my favorite brand of smartphone only., Neutral",
        "I purchase my favorite brand of smartphone only., Agree",
        "I purchase my favorite brand of smartphone only., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz6