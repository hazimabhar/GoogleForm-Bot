//change the array based on the id on google form

function getAnswerFaiz9(){
    const arr =[
        "Positive feedback about a restaurant's food quality is important to me., Strongly Disagree",
        "Positive feedback about a restaurant's food quality is important to me., Disagree",
        "Positive feedback about a restaurant's food quality is important to me., Neutral",
        "Positive feedback about a restaurant's food quality is important to me., Agree",
        "Positive feedback about a restaurant's food quality is important to me., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz9