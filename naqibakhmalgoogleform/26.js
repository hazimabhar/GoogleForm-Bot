//change the array based on the id on google form

function getAnswerFaiz26(){
    const arr =[
        "Strongly disagree, response for I believe our digital advertising strategies directly link to getting and keeping customers.",
        "Disagree, response for I believe our digital advertising strategies directly link to getting and keeping customers.",
        "Somewhat disagree, response for I believe our digital advertising strategies directly link to getting and keeping customers.",
        "Neutral, response for I believe our digital advertising strategies directly link to getting and keeping customers.",
        "Somewhat agree, response for I believe our digital advertising strategies directly link to getting and keeping customers.",
        "Agree, response for I believe our digital advertising strategies directly link to getting and keeping customers.",
        "Strongly agree, response for I believe our digital advertising strategies directly link to getting and keeping customers.",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz26