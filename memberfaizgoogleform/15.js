//change the array based on the id on google form

function getAnswerFaiz15(){
    const arr =[
        "i100",
        "i103",
        "i106",
        "i109",
        "i112",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz15