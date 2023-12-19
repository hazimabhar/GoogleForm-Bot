//change the array based on the id on google form

function getAnswerFaiz7(){
    const arr =[
        "i131",
        "i134",
        "i137",
        "i140",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz7