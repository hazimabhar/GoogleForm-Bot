//change the array based on the id on google form

function getAnswerFaiz20(){
    const arr =[
        "i214",
        "i217",
        "i220",
        "i223",
        "i226",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz20