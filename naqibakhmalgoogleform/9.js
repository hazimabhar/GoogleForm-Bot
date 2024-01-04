//change the array based on the id on google form

function getAnswerFaiz9(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising has played a crucial role in driving more sales",
        "Disagree, response for I believe digital advertising has played a crucial role in driving more sales",
        "Somewhat disagree, response for I believe digital advertising has played a crucial role in driving more sales",
        "Neutral, response for I believe digital advertising has played a crucial role in driving more sales",
        "Somewhat agree, response for I believe digital advertising has played a crucial role in driving more sales",
        "Agree, response for I believe digital advertising has played a crucial role in driving more sales",
        "Strongly agree, response for I believe digital advertising has played a crucial role in driving more sales",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz9