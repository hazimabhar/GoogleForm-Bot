//change the array based on the id on google form

function getAnswerFaiz8(){
    const arr =[
        "I rely on recommendations from friends/ family when choosing a restaurant., Strongly Disagree",
        "I rely on recommendations from friends/ family when choosing a restaurant., Disagree",
        "I rely on recommendations from friends/ family when choosing a restaurant., Neutral",
        "I rely on recommendations from friends/ family when choosing a restaurant., Agree",
        "I rely on recommendations from friends/ family when choosing a restaurant., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz8