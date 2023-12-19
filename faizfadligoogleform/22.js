//change the array based on the id on google form

function getAnswerFaiz22(){
    const arr =[
        "i252",
        "i255",
        "i258",
        "i261",
        "i264",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz22