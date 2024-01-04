//change the array based on the id on google form

function getAnswerFaiz4(){
    const arr =[
        "i41",
        "i44",
        "i47",
        "i50",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz4