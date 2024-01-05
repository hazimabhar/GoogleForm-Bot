//change the array based on the id on google form

function getAnswerFaiz19(){
    const arr =[
        "18 years old",
        "19 years old",
        "20 years old",
        "21 years old",
        "22 years old",
        "23 years old",
        "24 years old",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz19