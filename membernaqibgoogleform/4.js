//change the array based on the id on google form

function getAnswerFaiz4(){
    const arr =[
        "My intention to visit a restaurant is influenced by the comments provided by other online users., Strongly Disagree",
        "My intention to visit a restaurant is influenced by the comments provided by other online users., Disagree",
        "My intention to visit a restaurant is influenced by the comments provided by other online users., Neutral",
        "My intention to visit a restaurant is influenced by the comments provided by other online users., Agree",
        "My intention to visit a restaurant is influenced by the comments provided by other online users., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz4