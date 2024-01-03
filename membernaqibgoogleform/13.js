//change the array based on the id on google form

function getAnswerFaiz13(){
    const arr =[
        "I would buy a smartphone if it helped me fit in with my social group better., Strongly Disagree",
        "I would buy a smartphone if it helped me fit in with my social group better., Disagree",
        "I would buy a smartphone if it helped me fit in with my social group better., Neutral",
        "I would buy a smartphone if it helped me fit in with my social group better., Agree",
        "I would buy a smartphone if it helped me fit in with my social group better., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz13