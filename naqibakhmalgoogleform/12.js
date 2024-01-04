//change the array based on the id on google form

function getAnswerFaiz12(){
    const arr =[
        "Strongly disagree, response for I believe the use of digital advertising has led to more sales",
        "Disagree, response for I believe the use of digital advertising has led to more sales",
        "Somewhat disagree, response for I believe the use of digital advertising has led to more sales",
        "Neutral, response for I believe the use of digital advertising has led to more sales",
        "Somewhat agree, response for I believe the use of digital advertising has led to more sales",
        "Agree, response for I believe the use of digital advertising has led to more sales",
        "Strongly agree, response for I believe the use of digital advertising has led to more sales",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz12