//change the array based on the id on google form

function getAnswerFaiz8(){
    const arr =[
        "Strongly disagree, response for I believe more people have started visiting our website and engaging with us",
        "Disagree, response for I believe more people have started visiting our website and engaging with us",
        "Somewhat disagree, response for I believe more people have started visiting our website and engaging with us",
        "Neutral, response for I believe more people have started visiting our website and engaging with us",
        "Somewhat agree, response for I believe more people have started visiting our website and engaging with us",
        "Agree, response for I believe more people have started visiting our website and engaging with us",
        "Strongly agree, response for I believe more people have started visiting our website and engaging with us",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz8