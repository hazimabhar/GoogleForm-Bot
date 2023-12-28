//change the array based on the id on google form

function getAnswerFaiz4(){
    const arr =[
        "i80",
        "i83",
        "i86",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz4