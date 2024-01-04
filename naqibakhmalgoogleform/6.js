//change the array based on the id on google form

function getAnswerFaiz6(){
    const arr =[
        "i76",
        "i79",
        "i82",
        "i85",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz6