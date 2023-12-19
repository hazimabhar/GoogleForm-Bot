//change the array based on the id on google form

function getAnswerFaiz9(){
    const arr =[
        "i5",
        "i8",
        "i11",
        "i14",
        "i17",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz9