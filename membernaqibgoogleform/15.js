//change the array based on the id on google form

function getAnswerFaiz15(){
    const arr =[
        "I consider the freshness of the food to be important when choosing a restaurant. , Strongly Disagree",
        "I consider the freshness of the food to be important when choosing a restaurant. , Disagree",
        "I consider the freshness of the food to be important when choosing a restaurant. , Neutral",
        "I consider the freshness of the food to be important when choosing a restaurant. , Agree",
        "I consider the freshness of the food to be important when choosing a restaurant. , Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz15