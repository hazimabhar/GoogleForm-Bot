//change the array based on the id on google form

function getAnswerFaiz21(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising attract more people and recognizing my brand",
        "Disagree, response for I believe digital advertising attract more people and recognizing my brand",
        "Somewhat disagree, response for I believe digital advertising attract more people and recognizing my brand",
        "Neutral, response for I believe digital advertising attract more people and recognizing my brand",
        "Somewhat agree, response for I believe digital advertising attract more people and recognizing my brand",
        "Agree, response for I believe digital advertising attract more people and recognizing my brand",
        "Strongly agree, response for I believe digital advertising attract more people and recognizing my brand",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz21