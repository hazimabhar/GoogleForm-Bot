//change the array based on the id on google form

function getAnswerFaiz11(){
    const arr =[
        "I will buy this Smartphone brand without doubt, Strongly Disagree",
        "I will buy this Smartphone brand without doubt, Disagree",
        "I will buy this Smartphone brand without doubt, Neutral",
        "I will buy this Smartphone brand without doubt, Agree",
        "I will buy this Smartphone brand without doubt, Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz11