//change the array based on the id on google form

function getAnswerFaiz22(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising has been important to make consumers aware with what I offer.",
        "Disagree, response for I believe digital advertising has been important to make consumers aware with what I offer.",
        "Somewhat disagree, response for I believe digital advertising has been important to make consumers aware with what I offer.",
        "Neutral, response for I believe digital advertising has been important to make consumers aware with what I offer.",
        "Somewhat agree, response for I believe digital advertising has been important to make consumers aware with what I offer.",
        "Agree, response for I believe digital advertising has been important to make consumers aware with what I offer.",
        "Strongly agree, response for I believe digital advertising has been important to make consumers aware with what I offer.",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz22