//change the array based on the id on google form

function getAnswerFaiz12(){
    const arr =[
        "i43",
        "i46",
        "i49",
        "i52",
        "i55",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz12