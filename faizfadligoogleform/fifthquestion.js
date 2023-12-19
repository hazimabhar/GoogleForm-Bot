//change the array based on the id on google form

function getAnswerFaiz5(){
    const arr =[
        "i93",
        "i96",
        "i99",
        "i102",
        "i105",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz5