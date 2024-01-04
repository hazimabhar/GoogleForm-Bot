//change the array based on the id on google form

function getAnswerFaiz17(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising is a good way to get new customers",
        "Disagree, response for I believe digital advertising is a good way to get new customers",
        "Somewhat disagree, response for I believe digital advertising is a good way to get new customers",
        "Neutral, response for I believe digital advertising is a good way to get new customers",
        "Somewhat agree, response for I believe digital advertising is a good way to get new customers",
        "Agree, response for I believe digital advertising is a good way to get new customers",
        "Strongly agree, response for I believe digital advertising is a good way to get new customers",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz17