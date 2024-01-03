//change the array based on the id on google form

function getAnswerFaiz24(){
    const arr =[
        "Diploma",
        "Degree",
        "Master/PhD",
        "Professional Certificate",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz24