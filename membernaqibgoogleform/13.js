//change the array based on the id on google form

function getAnswerFaiz13(){
    const arr =[
        "Food quality feedback is important to me when choosing a restaurant., Strongly Disagree",
        "Food quality feedback is important to me when choosing a restaurant., Disagree",
        "Food quality feedback is important to me when choosing a restaurant., Neutral",
        "Food quality feedback is important to me when choosing a restaurant., Agree",
        "Food quality feedback is important to me when choosing a restaurant., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz13