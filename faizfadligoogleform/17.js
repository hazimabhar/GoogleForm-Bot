//change the array based on the id on google form

function getAnswerFaiz17(){
    const arr =[
        "i157",
        "i160",
        "i163",
        "i166",
        "i169",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz17