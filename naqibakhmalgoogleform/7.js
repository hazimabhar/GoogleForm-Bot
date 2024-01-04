//change the array based on the id on google form

function getAnswerFaiz7(){
    const arr =[
        "Strongly disagree, response for I believe digital marketing significantly increased the visibility of our brand",
        "Disagree, response for I believe digital marketing significantly increased the visibility of our brand",
        "Somewhat disagree, response for I believe digital marketing significantly increased the visibility of our brand",
        "Neutral, response for I believe digital marketing significantly increased the visibility of our brand",
        "Somewhat agree, response for I believe digital marketing significantly increased the visibility of our brand",
        "Agree, response for I believe digital marketing significantly increased the visibility of our brand",
        "Strongly agree, response for I believe digital marketing significantly increased the visibility of our brand",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz7