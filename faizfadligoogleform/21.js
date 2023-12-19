//change the array based on the id on google form

function getAnswerFaiz21(){
    const arr =[
        "i233",
        "i236",
        "i239",
        "i242",
        "i245",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz21