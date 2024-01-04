//change the array based on the id on google form

function getAnswerFaiz16(){
    const arr =[
        "Strongly disagree, response for I believe digital advertising has helped to make interesting and relevant content for audience.",
        "Disagree, response for I believe digital advertising has helped to make interesting and relevant content for audience.",
        "Somewhat disagree, response for I believe digital advertising has helped to make interesting and relevant content for audience.",
        "Neutral, response for I believe digital advertising has helped to make interesting and relevant content for audience.",
        "Somewhat agree, response for I believe digital advertising has helped to make interesting and relevant content for audience.",
        "Agree, response for I believe digital advertising has helped to make interesting and relevant content for audience.",
        "Strongly agree, response for I believe digital advertising has helped to make interesting and relevant content for audience.",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz16