//change the array based on the id on google form

function getAnswerFaiz1(){
    const arr =[
        "I am likely to visit a restaurant that fulfill my wants., Strongly Disagree",
        "I am likely to visit a restaurant that fulfill my wants., Disagree",
        "I am likely to visit a restaurant that fulfill my wants., Neutral",
        "I am likely to visit a restaurant that fulfill my wants., Agree",
        "I am likely to visit a restaurant that fulfill my wants., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz1