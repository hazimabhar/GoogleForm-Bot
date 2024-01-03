//change the array based on the id on google form

function getAnswerFaiz7(){
    const arr =[
        "My smartphone has good quality, Strongly Disagree",
        "My smartphone has good quality, Disagree",
        "My smartphone has good quality, Neutral",
        "My smartphone has good quality, Agree",
        "My smartphone has good quality, Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz7