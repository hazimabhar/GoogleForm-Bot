//change the array based on the id on google form

function getAnswerFaiz20(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising has created a special identity for my company in the market",
        "Disagree, response for I believe digital advertising has created a special identity for my company in the market",
        "Somewhat disagree, response for I believe digital advertising has created a special identity for my company in the market",
        "Neutral, response for I believe digital advertising has created a special identity for my company in the market",
        "Somewhat agree, response for I believe digital advertising has created a special identity for my company in the market",
        "Agree, response for I believe digital advertising has created a special identity for my company in the market",
        "Strongly agree, response for I believe digital advertising has created a special identity for my company in the market",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz20