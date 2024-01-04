//change the array based on the id on google form

function getAnswerFaiz18(){
    const arr =[
        "Strongly disagree, response for I believe the analytics and data from digital advertising platforms are crucial for improving our marketing strategies",
        "Disagree, response for I believe the analytics and data from digital advertising platforms are crucial for improving our marketing strategies",
        "Somewhat disagree, response for I believe the analytics and data from digital advertising platforms are crucial for improving our marketing strategies",
        "Neutral, response for I believe the analytics and data from digital advertising platforms are crucial for improving our marketing strategies",
        "Somewhat agree, response for I believe the analytics and data from digital advertising platforms are crucial for improving our marketing strategies",
        "Agree, response for I believe the analytics and data from digital advertising platforms are crucial for improving our marketing strategies",
        "Strongly agree, response for I believe the analytics and data from digital advertising platforms are crucial for improving our marketing strategies",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz18