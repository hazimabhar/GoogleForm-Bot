//change the array based on the id on google form

function getAnswerFaiz14(){
    const arr =[
        "I consider the taste of the food to be important when choosing a restaurant., Strongly Disagree",
        "I consider the taste of the food to be important when choosing a restaurant., Disagree",
        "I consider the taste of the food to be important when choosing a restaurant., Neutral",
        "I consider the taste of the food to be important when choosing a restaurant., Agree",
        "I consider the taste of the food to be important when choosing a restaurant., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz14