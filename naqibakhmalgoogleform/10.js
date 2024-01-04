//change the array based on the id on google form

function getAnswerFaiz10(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising campaigns have influence people to make purchases",
        "Disagree, response for I believe digital advertising campaigns have influence people to make purchases",
        "Somewhat disagree, response for I believe digital advertising campaigns have influence people to make purchases",
        "Neutral, response for I believe digital advertising campaigns have influence people to make purchases",
        "Somewhat agree, response for I believe digital advertising campaigns have influence people to make purchases",
        "Agree, response for I believe digital advertising campaigns have influence people to make purchases",
        "Strongly agree, response for I believe digital advertising campaigns have influence people to make purchases",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz10