//change the array based on the id on google form

function getAnswerFaiz15(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising platforms give helpful insights and tools",
        "Disagree, response for I believe digital advertising platforms give helpful insights and tools",
        "Somewhat disagree, response for I believe digital advertising platforms give helpful insights and tools",
        "Neutral, response for I believe digital advertising platforms give helpful insights and tools",
        "Somewhat agree, response for I believe digital advertising platforms give helpful insights and tools",
        "Agree, response for I believe digital advertising platforms give helpful insights and tools",
        "Strongly agree, response for I believe digital advertising platforms give helpful insights and tools",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz15