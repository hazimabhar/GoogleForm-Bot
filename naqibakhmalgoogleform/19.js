//change the array based on the id on google form

function getAnswerFaiz19(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising has really made more people notice my brand.",
        "Disagree, response for I believe digital advertising has really made more people notice my brand.",
        "Somewhat disagree, response for I believe digital advertising has really made more people notice my brand.",
        "Neutral, response for I believe digital advertising has really made more people notice my brand.",
        "Somewhat agree, response for I believe digital advertising has really made more people notice my brand.",
        "Agree, response for I believe digital advertising has really made more people notice my brand.",
        "Strongly agree, response for I believe digital advertising has really made more people notice my brand.",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz19