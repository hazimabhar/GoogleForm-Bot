//change the array based on the id on google form

function getAnswerFaiz14(){
    const arr =[
        "I usually consult my friends when buying a Smartphone brand., Strongly Disagree",
        "I usually consult my friends when buying a Smartphone brand., Disagree",
        "I usually consult my friends when buying a Smartphone brand., Neutral",
        "I usually consult my friends when buying a Smartphone brand., Agree",
        "I usually consult my friends when buying a Smartphone brand., Strongly Agree", 
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz14