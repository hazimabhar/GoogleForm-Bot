//change the array based on the id on google form

function getAnswerFaiz2(){
    const arr =[
        "I trust the opinions of other people I read online about restaurants., Strongly Disagree",
        "I trust the opinions of other people I read online about restaurants., Disagree",
        "I trust the opinions of other people I read online about restaurants., Neutral",
        "I trust the opinions of other people I read online about restaurants., Agree",
        "I trust the opinions of other people I read online about restaurants., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz2