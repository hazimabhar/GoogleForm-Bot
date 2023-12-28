//change the array based on the id on google form

function getAnswerFaiz3(){
    const arr =[
        "i34",
        "i37",
        "i40",
        "i43",
        "i46",
        "i49",
        "i52",
        "i55",
        "i58",
        "i61",
        "i64",
        "i67",
        "i70",
        "i73",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz3