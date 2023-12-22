//change the array based on the id on google form

function getAnswerFaiz16(){
    const arr =[
        "i24",
        "i27",
        "i30",
        "i33",
        "i36",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz16