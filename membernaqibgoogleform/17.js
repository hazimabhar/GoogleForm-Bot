//change the array based on the id on google form

function getAnswerFaiz17(){
    const arr =[
        "It is very likely that I will buy smartphone in future., Strongly Disagree",
        "It is very likely that I will buy smartphone in future., Disagree",
        "It is very likely that I will buy smartphone in future., Neutral",
        "It is very likely that I will buy smartphone in future., Agree",
        "It is very likely that I will buy smartphone in future., Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz17