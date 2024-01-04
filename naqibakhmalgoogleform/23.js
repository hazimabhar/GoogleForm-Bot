//change the array based on the id on google form

function getAnswerFaiz23(){
    const arr =[
        "Strongly disagree, response for I believe investing in digital advertising has made our sales increase",
        "Disagree, response for I believe investing in digital advertising has made our sales increase",
        "Somewhat disagree, response for I believe investing in digital advertising has made our sales increase",
        "Neutral, response for I believe investing in digital advertising has made our sales increase",
        "Somewhat agree, response for I believe investing in digital advertising has made our sales increase",
        "Agree, response for I believe investing in digital advertising has made our sales increase",
        "Strongly agree, response for I believe investing in digital advertising has made our sales increase",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz23