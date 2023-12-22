//change the array based on the id on google form

function getAnswerFaiz3(){
    const arr =[
        "i28",
        "i31",
        "i34",
        "i37",
        "i40",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz3