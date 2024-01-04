//change the array based on the id on google form

function getAnswerFaiz13(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising has helped cut marketing costs",
        "Disagree, response for I believe digital advertising has helped cut marketing costs",
        "Somewhat disagree, response for I believe digital advertising has helped cut marketing costs",
        "Neutral, response for I believe digital advertising has helped cut marketing costs",
        "Somewhat agree, response for I believe digital advertising has helped cut marketing costs",
        "Agree, response for I believe digital advertising has helped cut marketing costs",
        "Strongly agree, response for I believe digital advertising has helped cut marketing costs",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz13