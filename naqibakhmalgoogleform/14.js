//change the array based on the id on google form

function getAnswerFaiz14(){
    const arr =[
        "Strongly disagree, response for I believe my business has become more profitable because of digital advertising",
        "Disagree, response for I believe my business has become more profitable because of digital advertising",
        "Somewhat disagree, response for I believe my business has become more profitable because of digital advertising",
        "Neutral, response for I believe my business has become more profitable because of digital advertising",
        "Somewhat agree, response for I believe my business has become more profitable because of digital advertising",
        "Agree, response for I believe my business has become more profitable because of digital advertising",
        "Strongly agree, response for I believe my business has become more profitable because of digital advertising",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz14