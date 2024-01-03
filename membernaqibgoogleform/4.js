//change the array based on the id on google form

function getAnswerFaiz4(){
    const arr =[
        "I am familiar with my Smartphone brand, Strongly Disagree",
        "I am familiar with my Smartphone brand, Disagree",
        "I am familiar with my Smartphone brand, Neutral",
        "I am familiar with my Smartphone brand, Agree",
        "I am familiar with my Smartphone brand, Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz4