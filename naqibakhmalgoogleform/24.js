//change the array based on the id on google form

function getAnswerFaiz24(){
    const arr =[
        "Strongly disagree, response for I believe spending on digital advertising has led to better profits",
        "Disagree, response for I believe spending on digital advertising has led to better profits",
        "Somewhat disagree, response for I believe spending on digital advertising has led to better profits",
        "Neutral, response for I believe spending on digital advertising has led to better profits",
        "Somewhat agree, response for I believe spending on digital advertising has led to better profits",
        "Agree, response for I believe spending on digital advertising has led to better profits",
        "Strongly agree, response for I believe spending on digital advertising has led to better profits",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz24