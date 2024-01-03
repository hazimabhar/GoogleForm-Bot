//change the array based on the id on google form

function getAnswerFaiz12(){
    const arr =[
        "I love to have the same smartphone as my family members., Strongly Disagree",
        "I love to have the same smartphone as my family members., Disagree",
        "I love to have the same smartphone as my family members., Neutral",
        "I love to have the same smartphone as my family members., Agree",
        "I love to have the same smartphone as my family members., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz12