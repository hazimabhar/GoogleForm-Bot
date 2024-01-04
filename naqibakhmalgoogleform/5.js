//change the array based on the id on google form

function getAnswerFaiz5(){
    const arr =[
        "i57",
        "i60",
        "i63",
        "i66",
        "i69",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz5