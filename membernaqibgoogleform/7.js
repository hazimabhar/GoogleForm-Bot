//change the array based on the id on google form

function getAnswerFaiz7(){
    const arr =[
        "I read food blogs to find information about restaurants., Strongly Disagree",
        "I read food blogs to find information about restaurants., Disagree",
        "I read food blogs to find information about restaurants., Neutral",
        "I read food blogs to find information about restaurants., Agree",
        "I read food blogs to find information about restaurants., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz7