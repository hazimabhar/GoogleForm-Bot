//change the array based on the id on google form

function getAnswerFaiz5(){
    const arr =[
        "I often read online reviews of restaurants before making a decision about where to eat. , Strongly Disagree",
        "I often read online reviews of restaurants before making a decision about where to eat. , Disagree",
        "I often read online reviews of restaurants before making a decision about where to eat. , Neutral",
        "I often read online reviews of restaurants before making a decision about where to eat. , Agree",
        "I often read online reviews of restaurants before making a decision about where to eat. , Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz5