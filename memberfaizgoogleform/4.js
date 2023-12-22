//change the array based on the id on google form

function getAnswerFaiz4(){
    const arr =[
        "i47",
        "i50",
        "i53",
        "i56",
        "i59"
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz4