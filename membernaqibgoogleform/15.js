//change the array based on the id on google form

function getAnswerFaiz15(){
    const arr =[
        "It is important that my friends like the brand of smartphone I am using., Strongly Disagree",
        "It is important that my friends like the brand of smartphone I am using., Disagree",
        "It is important that my friends like the brand of smartphone I am using., Neutral",
        "It is important that my friends like the brand of smartphone I am using., Agree",
        "It is important that my friends like the brand of smartphone I am using., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz15