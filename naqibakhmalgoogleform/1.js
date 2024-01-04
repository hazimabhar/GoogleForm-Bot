//change the array based on the id on google form

function getAnswerFaiz1(){
    const arr =[
        "i5",
        "i8",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz1