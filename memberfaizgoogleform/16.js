//change the array based on the id on google form

function getAnswerFaiz16(){
    const arr =[
        "i119",
        "i122",
        "i125",
        "i128",
        "i131",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz16