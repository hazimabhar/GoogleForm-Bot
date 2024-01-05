//change the array based on the id on google form

function getAnswerFaiz3(){
    const arr =[
        "I am more likely to try a new restaurant if I see a lot of people recommending it online., Strongly Disagree",
        "I am more likely to try a new restaurant if I see a lot of people recommending it online., Disagree",
        "I am more likely to try a new restaurant if I see a lot of people recommending it online., Neutral",
        "I am more likely to try a new restaurant if I see a lot of people recommending it online., Agree",
        "I am more likely to try a new restaurant if I see a lot of people recommending it online., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz3