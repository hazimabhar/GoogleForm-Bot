//change the array based on the id on google form

function getAnswerFaiz2(){
    const arr =[
        "i24",
        "i27",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz2