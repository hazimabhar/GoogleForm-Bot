//change the array based on the id on google form

function getAnswerFaiz25(){
    const arr =[
        "Strongly disagree, response for I believe using digital advertising has a clear impact on profit return compared to traditional ads.",
        "Disagree, response for I believe using digital advertising has a clear impact on profit return compared to traditional ads.",
        "Somewhat disagree, response for I believe using digital advertising has a clear impact on profit return compared to traditional ads.",
        "Neutral, response for I believe using digital advertising has a clear impact on profit return compared to traditional ads.",
        "Somewhat agree, response for I believe using digital advertising has a clear impact on profit return compared to traditional ads.",
        "Agree, response for I believe using digital advertising has a clear impact on profit return compared to traditional ads.",
        "Strongly agree, response for I believe using digital advertising has a clear impact on profit return compared to traditional ads.",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz25