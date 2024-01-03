//change the array based on the id on google form

function getAnswerFaiz25(){
    const arr =[
        "Full-time employment",
        "Part-time employment",
        "Self-employed",
        "Unemployed",
        "Student",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz25