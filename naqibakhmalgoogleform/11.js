//change the array based on the id on google form

function getAnswerFaiz11(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising has boosted sales",
        "Disagree, response for I believe digital advertising has boosted sales",
        "Somewhat disagree, response for I believe digital advertising has boosted sales",
        "Neutral, response for I believe digital advertising has boosted sales",
        "Somewhat agree, response for I believe digital advertising has boosted sales",
        "Agree, response for I believe digital advertising has boosted sales",
        "Strongly agree, response for I believe digital advertising has boosted sales",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz11