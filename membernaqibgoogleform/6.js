//change the array based on the id on google form

function getAnswerFaiz6(){
    const arr =[
        "I use social media to find information about restaurants., Strongly Disagree",
        "I use social media to find information about restaurants., Disagree",
        "I use social media to find information about restaurants., Neutral",
        "I use social media to find information about restaurants., Agree",
        "I use social media to find information about restaurants., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz6